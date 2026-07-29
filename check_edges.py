from PIL import Image
import numpy as np

img = Image.open('public/hero-iphone.png').convert('RGBA')
data = np.array(img)
height, width = data.shape[0], data.shape[1]

print("Top Left:", data[0, 0])
print("Top Right:", data[0, width-1])
print("Bottom Left:", data[height-1, 0])
print("Bottom Right:", data[height-1, width-1])
print("Center Left:", data[height//2, 0])
print("Center Right:", data[height//2, width-1])

