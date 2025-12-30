
# Shipment Tracking System

This project is a **Shipment Tracking System** developed by **Mohamed Sayid Mohamed**.  
It is built with **React + Vite** for the frontend and **PHP** backend running on **XAMPP**.

## Project Overview
This system allows users to track shipments using a **Tracking ID**.  
The frontend communicates with the PHP backend API to fetch and display shipment details such as **status, origin, destination, and customer**.

## Features
- Enter a **Tracking ID** to search shipments.
- Display shipment information:
  - Tracking ID
  - Customer
  - Origin
  - Destination
  - Status
- Shows error message if the tracking ID is invalid.
- Minimal and responsive frontend using React + Vite.
- Simple PHP backend API running on XAMPP.

## Project Structure

### Frontend (React + Vite)
project-root/
├─ src/
│ ├─ main.jsx # Entry point
│ ├─ TrackingList.jsx # Component for tracking
├─ index.html
├─ package.json
├─ vite.config.js

shell
Copy code

### Backend (PHP in XAMPP)
C:\xampp\htdocs\ahsan-api
└─ api/
├─ track.php # Endpoint for tracking
├─ contact.php # Example API file
├─ cors.php # CORS settings

markdown
Copy code

## Getting Started

### Backend (PHP)
1. Copy the `api` folder to `C:\xampp\htdocs\ahsan-api\api`.
2. Start **Apache** in XAMPP Control Panel.
3. API endpoint will be available at:

http://localhost/ahsan-api/api/track.php

markdown
Copy code

### Frontend (React + Vite)
1. Install dependencies:
```bash
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser at:

arduino
Copy code
http://localhost:5173
Enter a Tracking ID and click Track.

Sample Tracking IDs
Copy code
AAL-89231
AAL-89232
AAL-89233
AAL-89234
AAL-89235
Invalid IDs will return:

typescript
Copy code
Invalid tracking number. Please check and try again.
Author
Mohamed Sayid Mohamed – Fullstack Developer











