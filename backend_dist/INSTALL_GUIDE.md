# 🚀 Ahsan Air Logistic - Backend Installation Guide

This guide will help you set up the PHP backend for the Ahsan Air Logistic website using XAMPP on Windows.

## 📋 Prerequisites
- **XAMPP** installed (Apache & PHP).
- The `front-end/backend_dist/api` folder from this project.

## 🛠️ Step-by-Step Setup

### 1. Locate your XAMPP Installation
Usually, XAMPP is installed at:
`C:\xampp\`

### 2. Navigate to the `htdocs` folder
This is where your public websites live:
`C:\xampp\htdocs\`

### 3. Create the Project Folder
Inside `htdocs`, create a new folder named `ahsan-api`.
Path should be: `C:\xampp\htdocs\ahsan-api`

### 4. Copy the API Files
Copy the **entire contents** of the `backend_dist/api` folder from your React project into this new folder.

**Your folder structure should look like this:**
```
C:\xampp\htdocs\ahsan-api\
├── admin_shipments.php
├── contact.php
├── cors.php
└── track.php
```

### 5. Start the Server
1. Open **XAMPP Control Panel**.
2. Click **Start** next to **Apache**.
3. Ensure it turns green (running).

### 6. Verify the Backend
Open your browser and visit:
[http://localhost/ahsan-api/track.php](http://localhost/ahsan-api/track.php)

If you see a JSON response (even an error like "Method Not Allowed"), **it is working!** ✅

## 🔗 Connecting React to PHP
We have already configured your React app to point to this URL.
The file `src/services/api.js` is set to:
`baseURL: 'http://localhost/ahsan-api'`

**You are all set!** 🚀
Now you can use the Track Shipment, Contact Form, and Admin Dashboard features on your site.
