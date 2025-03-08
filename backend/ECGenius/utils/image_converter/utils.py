import os
import cv2
import numpy as np
from PIL import Image

import numpy as np
from scipy.cluster.hierarchy import fcluster, linkage

def parse_yolo_output(txt_path, image_width, image_height):
    """Parses YOLO bounding box output, clusters rows, and sorts within each row."""
    bounding_boxes = []
    
    with open(txt_path, 'r') as f:
        lines = f.readlines()
        for line in lines:
            data = line.strip().split()
            x_center, y_center, w, h = map(float, data[1:])
            
            # Converts to absolute pixel coordinates
            x_min = int((x_center - w / 2) * image_width)
            y_min = int((y_center - h / 2) * image_height)
            x_max = int((x_center + w / 2) * image_width)
            y_max = int((y_center + h / 2) * image_height)

            bounding_boxes.append((x_min, y_min, x_max, y_max, x_center, y_center))

    # https://docs.python.org/3/howto/sorting.html, Sorting Techniques, Andrew Dalke and Raymond Hettinger. 
    # Used as reference for these lines that use lambda, Mar. 7, 2025.
    sorted_boxes_x = sorted(bounding_boxes, key=lambda box : box[0])
    
    sorted_boxes = []

    sorted_boxes += sorted(sorted_boxes_x[0:3], key=lambda box : box[1])
    sorted_boxes += sorted(sorted_boxes_x[3:6], key=lambda box : box[1])
    sorted_boxes += sorted(sorted_boxes_x[6:9], key=lambda box : box[1])
    sorted_boxes += sorted(sorted_boxes_x[9:12], key=lambda box : box[1])

    return [box[:4] for box in sorted_boxes]  # Only return bounding box coordinates


def crop_leads(image_path, bounding_boxes, output_folder):
    """Crops ECG leads based on bounding boxes and saves them in correct order."""
    os.makedirs(output_folder, exist_ok=True)
    image = cv2.imread(image_path)
    cropped_images = []

    LEADS = ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"]

    for i, (x_min, y_min, x_max, y_max) in enumerate(bounding_boxes):
        cropped_img = image[y_min:y_max, x_min:x_max]
        lead_name = LEADS[i]  # Assigns lead name
        cropped_path = os.path.join(output_folder, f'{lead_name}.png')
        cv2.imwrite(cropped_path, cropped_img)
        cropped_images.append(cropped_path)

    return cropped_images

def remove_markers(image_path):
    """Removes unwanted characters and markers from a cropped ECG image."""
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    _, thresh = cv2.threshold(image, 180, 255, cv2.THRESH_BINARY)
    cv2.imwrite(image_path, thresh)  # Overwrites the original image
