import numpy as np
import cv2
from scipy.ndimage import convolve
import matplotlib.pyplot as plt
from PIL import Image

# This work is a derivative of code from the following link, 
# https://github.com/alphanumericslab/ecg-image-kit/blob/main/codes/ecg-image-digitizer/image_to_sequence.m
# Code converted to python using CodeConvert, https://www.codeconvert.ai/matlab-to-python-converter, Feb 11, 2025.
def image_to_sequence(img, mode, method, *varargin):
    if len(varargin) < 1 or not varargin[0]:
        windowlen = 3
    else:
        windowlen = varargin[0]

    if len(varargin) < 2 or not varargin[1]:
        plot_result = False
    else:
        plot_result = varargin[1]

    # Convert image to grayscale if it's in RGB format
    if img.ndim == 3:
        img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    else:
        img_gray = img

    # Process image based on specified foreground mode
    if mode == 'dark-foreground':
        img_flipped = cv2.bitwise_not(img_gray)
    elif mode == 'bright-foreground':
        img_flipped = img_gray

    # Apply different methods for sequence extraction
    if method == 'max_finder':
        img_filtered = img_flipped

    elif method == 'moving_average':
        h = np.ones((windowlen, windowlen)) / (windowlen ** 2)
        img_filtered = convolve(img_flipped, h, mode='nearest')

    elif method == 'hor_smoothing':
        h = np.ones((1, windowlen)) / windowlen
        img_filtered = convolve(img_flipped, h, mode='nearest')

    elif method == 'all_left_right_neighbors':
        h = np.array([[1, 0, 1], [1, 1, 1], [1, 0, 1]]) / 6
        img_filtered = convolve(img_flipped, h, mode='nearest')

    elif method == 'combined_all_neighbors':
        h1 = np.array([[1, 1, 1]]) / 3
        z1 = convolve(img_flipped, h1, mode='nearest')
        h2 = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) / 3
        z2 = convolve(img_flipped, h2, mode='nearest')
        h3 = np.array([[0, 0, 1], [0, 1, 0], [1, 0, 0]]) / 3
        z3 = convolve(img_flipped, h3, mode='nearest')

        img_filtered = np.minimum(np.minimum(z1, z2), z3)

    # Find the maximum pixel value in each column to represent the ECG signal
    I = np.argmax(img_filtered, axis=0)
    img_height = img_filtered.shape[0]
    data = img_height - I  # Convert to vertical position (ECG amplitude with offset)

    # Plot the result if requested
    if plot_result:
        plt.figure()
        plt.imshow(img)
        plt.plot(np.arange(img.shape[1]), img.shape[0] - data, 'g', linewidth=3)
#        plt.plot(np.arange(len(data)), data)
        plt.show()

    return data

def convert_image_to_sequence(img_path, mode="dark-foreground", method="all_left_right_neighbors", windowlen=3, plot_result=False):

    image = Image.open(img_path)
    img_as_array = np.array(image)    

    time_series_data = image_to_sequence(img_as_array, mode, method, windowlen, plot_result)
    return time_series_data

