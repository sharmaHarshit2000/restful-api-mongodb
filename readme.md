# 📘 RESTful API with MongoDB using Node.js and Express

This is a RESTful API built with **Node.js**, **Express**, and **MongoDB** (via **Mongoose**) that allows you to perform full **CRUD operations** on a collection of users.

---

## 📦 Features

- 🔗 Connects to MongoDB using Mongoose
- ✅ User schema with validation
- 🧩 Middleware for logging, validation, and error handling
- 🔄 Supports Create, Read, Update, Delete (CRUD) operations
- 🚀 Uses `nodemon` for live server reloading in development

---

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Nodemon**

---

## 📁 Project Setup

```bash
git clone https://github.com/sharmaHarshit2000/restful-api-mongodb.git
cd restful-api-mongodb
npm install
npm start



🌐 API Endpoints

Method	Route	        Description
GET	    /api/users	        Get all users
GET	    /api/users/:id	    Get user by MongoDB ObjectId
POST	/api/user	        Add a new user
PUT	    /api/user/:id	    Update a user by ObjectId
DELETE	/api/user/:id	    Delete a user by ObjectId

