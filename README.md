# Blog Platform Backend

This is a backend system designed to manage users, blog posts, comments, file uploads, and role-based access for a blog platform. It is built with Node.js, Express, MongoDB, and integrates services like Cloudinary for file storage and Nodemailer for email notifications.

---

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Endpoints](#endpoints)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [License](#license)

---

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/blog-platform.git
    cd blog-platform-backend
    ```

2. **Install dependencies**:

    Run the following command to install the required dependencies:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory of the project and add the following environment variables:

    ```env
    DB_URI=mongodb://localhost:27017/blog-platform
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_URL=your_cloudinary_url
    EMAIL_SERVICE=your_email_service
    EMAIL_USERNAME=your_email_username
    EMAIL_PASSWORD=your_email_password
    ```

---

## Folder Structure

Here is the structure of the project:

```
/blog-platform
├── config/                           # Configuration files
│   ├── db.js                         # MongoDB connection logic
│   ├── cms.js                        # CMS integration (Strapi/Sanity)
│   ├── auth.js                       # JWT configuration
│   ├── cloudinary.js                 # Cloudinary file upload config
│   ├── server.js                     # Server configuration
│   └── roles.js                      # Role-based access config
├── controllers/                      # Controllers for handling requests
│   ├── blogController.js             # CRUD for blog posts
│   ├── userController.js             # User management
│   ├── commentController.js          # CRUD for comments
│   └── fileController.js             # File upload handling
├── middleware/                       # Middlewares for authentication, logging, etc.
│   ├── authMiddleware.js             # JWT authentication middleware
│   └── errorHandler.js               # Global error handler
├── models/                           # MongoDB schemas
│   ├── BlogPost.js                   # Blog post schema
│   ├── User.js                       # User schema
│   └── Comment.js                    # Comment schema
├── routes/                           # API routes
│   ├── blogRoutes.js                 # Routes for blog operations
│   ├── userRoutes.js                 # Routes for user operations
│   └── commentRoutes.js              # Routes for comments
├── services/                         # External service integrations
│   ├── cmsService.js                 # CMS integration logic
│   └── emailService.js               # Email sending logic
├── utils/                            # Utility functions/helpers
│   ├── email.js                      # Email helper functions
│   └── slugify.js                    # URL slug generator
├── validations/                      # Input validation files
│   ├── blogValidator.js              # Blog post validation
│   └── userValidator.js              # User input validation
├── /tests                            # All test files
│   ├── controllers-tests/            # Tests for controllers
│   ├── middleware-tests/             # Tests for middleware
│   ├── models-tests/                 # Tests for MongoDB models
│   └── routes-tests/                 # Tests for API routes
├── .env                              # Environment variables
├── .gitignore                        # Git ignore file
├── Dockerfile                        # Docker container setup
├── docker-compose.yml                # Docker Compose setup
├── app.js                            # Express app setup
├── server.js                         # Main server entry point
└── package.json                      # Project dependencies and scripts
```

---

## Endpoints

### **1. Authentication**

- **POST /api/auth/signup**  
  Registers a new user.
  - Request Body: 
    ```json
    {
      "username": "JohnDoe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:  
    ```json
    {
      "message": "User registered successfully",
      "user": { ...userData }
    }
    ```

- **POST /api/auth/login**  
  Logs in an existing user.
  - Request Body:  
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:  
    ```json
    {
      "token": "JWT_TOKEN"
    }
    ```

### **2. Blog Posts**

- **GET /api/blogs**  
  Retrieves all blog posts.
  - Response:  
    ```json
    [
      {
        "title": "First Blog",
        "content": "This is the first blog post",
        "author": "JohnDoe",
        "createdAt": "2023-01-01T00:00:00Z"
      }
    ]
    ```

- **POST /api/blogs**  
  Creates a new blog post (requires authentication).
  - Request Body:  
    ```json
    {
      "title": "My New Blog",
      "content": "This is my new blog post"
    }
    ```
  - Response:  
    ```json
    {
      "message": "Blog post created successfully",
      "post": { ...blogData }
    }
    ```

- **GET /api/blogs/:id**  
  Retrieves a specific blog post by ID.
  - Response:  
    ```json
    {
      "title": "My New Blog",
      "content": "This is my new blog post",
      "author": "JohnDoe",
      "createdAt": "2023-01-01T00:00:00Z"
    }
    ```

- **PUT /api/blogs/:id**  
  Updates an existing blog post.
  - Request Body:  
    ```json
    {
      "title": "Updated Blog Title",
      "content": "Updated content for the blog post"
    }
    ```

- **DELETE /api/blogs/:id**  
  Deletes a specific blog post.

### **3. Comments**

- **POST /api/comments**  
  Adds a new comment to a blog post.
  - Request Body:  
    ```json
    {
      "blogId": "blogId_here",
      "content": "This is a comment"
    }
    ```
  - Response:  
    ```json
    {
      "message": "Comment added successfully"
    }
    ```

- **GET /api/comments/:blogId**  
  Retrieves all comments for a blog post.
  - Response:  
    ```json
    [
      {
        "author": "JaneDoe",
        "content": "Great post!",
        "createdAt": "2023-01-01T00:00:00Z"
      }
    ]
    ```

---

## Usage

1. **Development Mode**:  
   Start the server in development mode with hot reloading:
   ```bash
   npm run dev
   ```

2. **Production Mode**:  
   To start the server in production mode:
   ```bash
   npm start
   ```

3. **Testing**:  
   To run tests with Jest:
   ```bash
   npm test
   ```

---

## Environment Variables

Ensure that the `.env` file contains the following values:

```env
DB_URI=mongodb://localhost:27017/blog-platform
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
EMAIL_SERVICE=your_email_service
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
```

---

## Testing

We use **Jest** for running unit and integration tests, and **Supertest** for API endpoint testing.

To run the tests:

```bash
npm test
```

You can also run specific tests or check the coverage with:

```bash
npm run test -- --coverage
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.