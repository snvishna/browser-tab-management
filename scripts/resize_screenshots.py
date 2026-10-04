import os
from PIL import Image

def resize_and_pad(img_path, output_path, target_width=1280, target_height=800, pad_color=(30, 30, 30)):
    # Open the image and convert to RGBA (to handle transparency if any)
    img = Image.open(img_path).convert("RGBA")
    
    # Create a background of pad_color to remove alpha channel
    background = Image.new("RGBA", img.size, pad_color + (255,))
    img = Image.alpha_composite(background, img)
    img = img.convert("RGB") # Remove alpha completely
    
    # Calculate scale factor to fit within target
    scale = min(target_width / img.width, target_height / img.height)
    new_width = int(img.width * scale)
    new_height = int(img.height * scale)
    
    # Resize image proportionally
    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Create the final padded image (1280x800)
    final_img = Image.new("RGB", (target_width, target_height), pad_color)
    
    # Paste resized image into center
    paste_x = (target_width - new_width) // 2
    paste_y = (target_height - new_height) // 2
    final_img.paste(img, (paste_x, paste_y))
    
    # Save as PNG
    final_img.save(output_path, "PNG")
    print(f"Processed {img_path} -> {output_path} (1280x800)")

if __name__ == "__main__":
    tmp_dir = "tmp"
    for filename in os.listdir(tmp_dir):
        if filename.endswith(".png"):
            path = os.path.join(tmp_dir, filename)
            resize_and_pad(path, path) # Overwrite
