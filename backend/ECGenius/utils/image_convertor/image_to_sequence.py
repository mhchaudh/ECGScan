import numpy as np
import cv2
from scipy.ndimage import convolve
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from PIL import Image
import os, uuid

def image_to_sequence(img, mode, method, *varargin, age, gender, identifier):
    if len(varargin) < 1 or not varargin[0]:
        windowlen = 3
    else:
        windowlen = varargin[0]

    if len(varargin) < 2 or not varargin[1]:
        plot_result = False
    else:
        plot_result = varargin[1]

    if img.ndim == 3:
        img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    else:
        img_gray = img

    if mode == 'dark-foreground':
        img_flipped = cv2.bitwise_not(img_gray)
    elif mode == 'bright-foreground':
        img_flipped = img_gray

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

    I = np.argmax(img_filtered, axis=0)
    img_height = img_filtered.shape[0]
    data = img_height - I  

    if plot_result:
        plt.figure(figsize=(10, 5))
        plt.plot(np.arange(len(data)), data, 'g', linewidth=2)
        plt.title("Digitized ECG Signal")
        plt.xlabel("Time (arbitrary units)")
        plt.ylabel("ECG Amplitude")
        plt.grid(True)

        # Save the figure in the same folder as the script
        output_folder = os.path.join(os.getcwd(), str(identifier))
        os.makedirs(output_folder, exist_ok=True)
        output_image_path = os.path.join(output_folder, f"{uuid.uuid4().hex}_{age}_{gender}.png")
        plt.savefig(output_image_path)
        print(f"ECG signal saved as {output_image_path}")
        plt.close()

    return data

if __name__ == "__main__":
    img_path = "ecg00033.jpg"
    image = Image.open(img_path)
    img_as_array = np.array(image)

    mode = "dark-foreground"
    method = "all_left_right_neighbors"
    grid_square_margin = 3
    plot_result = True

    time_series_data = image_to_sequence(img_as_array, mode, method, grid_square_margin, plot_result)

    #output_txt_path = os.path.join(os.getcwd(), "digitized_image_data.txt")
    #with open(output_txt_path, "a+") as f:
        #np.set_printoptions(threshold=10000)
        #f.write(f"Time Series Data as an Array\n\n{time_series_data}\n\n")


