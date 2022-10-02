from PIL import Image
from pytesseract import pytesseract
import csv
import pandas as pd

# Define path to tessaract.exe
path_to_tesseract = 'programs/Tesseract-OCR/tesseract.exe'

dataset = []

# TODO: Find user, append items
username = input("Username: ")
dataset.add(username)

path_to_image = 'image/grocery2.jpg'
pytesseract.tesseract_cmd = path_to_tesseract
img = Image.open(path_to_image)
text = pytesseract.image_to_string(img)

print(text)

text = text.split()

"""for item in text:
    item = item.lower()
    if item.isalpha():
        dataset.append(item)"""

"""# Define path to image
path_to_image = 'image/grocery2.jpg'

# Point tessaract_cmd to tessaract.exe
pytesseract.tesseract_cmd = path_to_tesseract

# Open image with PIL
img = Image.open(path_to_image)

# Extract text from image
text = pytesseract.image_to_string(img)

print(text)"""
