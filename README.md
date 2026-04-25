

# 🚀 FreelanceHub - Full Stack Web Application

## 📌 Project Overview

FreelanceHub is a full-stack web application inspired by freelance platforms.
It allows users to browse services, search, filter, and hire freelancers through a simple and interactive interface.

This project demonstrates **client-server architecture**, **REST API integration**, and **dynamic frontend development** using JavaScript.

---

## 🎯 Features

### 🖥️ Frontend

* Display services dynamically from backend API
* Search services by title
* Filter services by category
* Sort services by price and rating
* Save and Hire services
* Drag & Drop to hire services
* Responsive layout using Flexbox/Grid

### ⚙️ Backend (Node.js + Express)

* RESTful API implementation
* Get all services
* Get single service
* Save service
* Hire service
* Get saved services
* Get hired services
* JSON-based data storage

---

## 🏗️ Project Structure

```
FreelanceHub/
│── client/
│   ├── index.html
│   ├── css/
│   ├── js/
│
│── server/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── data/
│
│── package.json
│── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/services     | Get all services   |
| GET    | /api/services/:id | Get single service |
| POST   | /api/save         | Save a service     |
| POST   | /api/hire         | Hire a service     |
| GET    | /api/saved        | Get saved services |
| GET    | /api/hired        | Get hired services |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/UR3322/FreelanceHub-FullStack.git
cd FreelanceHub-FullStack
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

### 4️⃣ Open Frontend

Open this file in your browser:

```
client/index.html
```

---

## 💡 How It Works

* Frontend sends requests using `fetch()`
* Backend (Express.js) processes API requests
* Data is stored in JSON file / memory
* UI updates dynamically based on API responses

---

## 🎨 Technologies Used

* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (ES6)
* Node.js
* Express.js

---

## 🧠 Learning Outcomes

* Understanding of full-stack development
* Building REST APIs
* Connecting frontend with backend
* Managing application state
* Structuring scalable projects

---

## 👨‍💻 Author

**Muhammad Usman**

---
