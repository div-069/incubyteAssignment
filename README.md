# Sweet Shop Management API

## 📌 Project Overview

This project is a **backend REST API** for managing a Sweet Shop application. It is built as part of a technical assignment with a strong focus on **clean code, Test-Driven Development (TDD), proper Git practices, and responsible AI usage**.

The application allows managing core backend functionalities such as:

* Creating and managing users
* Managing sweets (add, list, update, delete)
* Purchasing sweets and updating inventory

The project is designed following **SOLID principles**, layered architecture, and industry-standard backend best practices.

> Note: This repository focuses on backend API development.
The UI screenshots are included only to demonstrate API functionality.


---

## 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**

### Testing

* **Jest**
* **Supertest**

### Tooling & Dev Practices

* Git & GitHub
* Test-Driven Development (TDD)
* Clean Architecture (Controller → Service → Repository)

---

## 📂 Project Structure

```
src/
 ├── controllers/     # HTTP request/response handling
 ├── services/        # Business logic
 ├── repositories/    # Database access layer
 ├── routes/          # API routes
 ├── tests/           # Unit & integration tests
 ├── utils/           # Utility functions
 └── app.ts           # App bootstrap
```

---

## 🚀 Setup & Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/div-069/incubyteAssignment
cd sweet-shop-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/sweetshop"
PORT=3000
```

### 4️⃣ Run Database Migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Start the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🧪 Running Tests

This project strictly follows **Test-Driven Development**.

Run all tests using:

```bash
npm test
```

### Test Types Included

* ✅ Unit tests for service layer
* ✅ Integration tests for API endpoints
* ✅ Edge case validations


## 🔄 TDD Workflow Followed

For each feature:

1. **RED** – Write failing tests first
2. **GREEN** – Implement minimum code to pass tests
3. **REFACTOR** – Improve code quality & structure

This workflow is clearly reflected in the **Git commit history**.

---

## 📸 Application Screenshots

> (Add screenshots of API responses using Postman / Swagger / frontend if any)

---

## 🤖 My AI Usage (Mandatory)

AI tools were intentionally and transparently used during this project.

### 🔧 AI Tools Used

* **ChatGPT**

### 📌 How I Used AI

* Generating initial boilerplate for controllers, services, and routes
* Writing and refining unit and integration test cases
* Debugging Prisma and PostgreSQL connection issues
* Improving code structure and naming conventions
* Reviewing commit message formats and README documentation

### 🧠 Reflection

Using AI significantly improved my development speed and helped me focus on writing clean, maintainable, and testable business logic. All AI-generated code was **reviewed, modified, and validated** by me to ensure correctness, originality, and alignment with project requirements.

For transparency, **AI is added as a co-author** in Git commits wherever it was used.

---

## 🔗 Deliverables

* ✅ Public Git Repository
* ✅ Comprehensive README (this document)
* ✅ Test Report
* ⭐ (https://github.com/div-069/incubyteAssignment)

---

## ⚠️ Notes

* Plagiarism-free implementation
* No external codebases copied
* AI used responsibly and transparently

---

## 👤 Author

**Divyanshu**

---

If you have any questions or need further clarification, feel free to reach out.


## Screenshots
![adminPage](screenshots/admin.png)
![homePage](screenshots/home.png)
![loginPage](screenshots/login.png)
![registerPage](screenshots/register.png)