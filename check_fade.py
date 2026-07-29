from PIL import Image
import numpy as np

img = Image.open('public/hero-iphone.png').convert('RGBA')
data = np.array(img)
height, width = data.shape[0], data.shape[1]

# Check center column
x = width // 2
for y in range(height-1, height-200, -10):
    print(f"y={y}: {data[y, x]}")

