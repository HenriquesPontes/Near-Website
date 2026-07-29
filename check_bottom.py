from PIL import Image
import numpy as np

img = Image.open('public/hero-iphone.png').convert('RGBA')
data = np.array(img)
height, width = data.shape[0], data.shape[1]

# Check bottom 200 rows, middle 200 pixels
region = data[height-200:height, width//2-100:width//2+100]

# See if there's any pure white pixels with high opacity
white_pixels = region[(region[:,:,0] > 240) & (region[:,:,1] > 240) & (region[:,:,2] > 240) & (region[:,:,3] > 200)]
print(f"Number of white pixels in bottom center region: {len(white_pixels)}")

# Just print the exact color of the very bottom center 10x10 block
print("Bottom center average color:", np.mean(region[-10:, 90:110], axis=(0,1)))

