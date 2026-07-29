from PIL import Image
import numpy as np

img = Image.open('public/hero-iphone.png').convert('RGBA')
data = np.array(img)
height, width = data.shape[0], data.shape[1]

for y in range(height-1, -1, -1):
    row = data[y]
    # Calculate average brightness of non-transparent pixels
    opaque_pixels = row[row[:, 3] > 100]
    if len(opaque_pixels) > 0:
        avg_r = np.mean(opaque_pixels[:, 0])
        avg_g = np.mean(opaque_pixels[:, 1])
        avg_b = np.mean(opaque_pixels[:, 2])
        if avg_r < 240 or avg_g < 240 or avg_b < 240:
            print(f"Significant non-white content starts at row {y} (avg R:{avg_r:.1f} G:{avg_g:.1f} B:{avg_b:.1f})")
            break
