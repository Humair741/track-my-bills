# TrakMyBills a smart receipt/bill scanner + analyzer

TrackMyBills is a smart web app that helps users scan and analyze receipts or bills by simply uploading an image or PDF. Using OCR and AI, it extracts data, flags unusual charges, categorizes spending, and displays clear visual insights, making expense tracking effortless for individuals and small businesses.

## Project Initialization - Phase 0

- created app using vite
- installed react-router-dom, tailwind, axios, react icons
- created separate folders and files for components

## Phase 1
### Created a basic UI component which: 
- Allow users to upload images or PDFs
- Show file previews (image for images, file name for PDFs)
- Buttons to remove/reset upload
- Basic validation

## Phase 2
### OCR integration with Tesseract.js 
- install tesseract.js using npm
- Create a new file in services folder

### What is tesseract.js?
It is a JavaScript library that let's you read text from images right ina browser or node app. In short it gives our app the ability to "see" and "read" a receipt or a bill.

### What is OCR?
Optical Character Recognition (OCR) converts picture of text into real, usable digital text.
For example, if someone uploads a photo of their bill, OCR pulls out the text like:
Milk $7
Bread $5
Total $12

### What it does
- Takes the uploaded file
- Tesseract.js extracts the raw text
- Shows the raw OCR output to the user for now

