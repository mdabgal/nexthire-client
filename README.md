
#  NextHire – Full Stack Job Portal

NextHire is a modern Full Stack Job Portal built with Next.js, TypeScript, Express.js, MongoDB, Better Auth, and JWT Authentication.

It allows employers to post and manage jobs while job seekers can browse jobs and apply online.

---

##  Live Demo

🔗 Client: https://nexthire-client.vercel.app

🔗 Server: https://nexthire-server-m1bk.onrender.com

---

##  Features

###  Authentication
- Better Auth Authentication
- Email & Password Login
- Google Login
- JWT Protected API
- Role Based Authentication

###  Job Seeker
- Browse Jobs
- View Job Details
- Apply for Jobs
- My Applications
- Dark / Light Theme

###  Employer
- Add Job
- Edit Job
- Delete Job
- Manage Jobs
- Dashboard Statistics

###  UI Features
- Fully Responsive
- Loading Spinner
- Custom Error Page
- Toast Notifications
- Dark & Light Mode
- Beautiful Modern UI

---

# Tech Stack

## Frontend

- Next.js 16
- TypeScript
- Tailwind CSS
- React Hot Toast
- Better Auth Client
- Lucide React

## Backend

- Express.js
- MongoDB
- JWT Authentication
- Better Auth
- TypeScript
- dotenv
- cors

---

#  Project Structure

Client

```
app/
components/
provider/
lib/
types/
```

Server

```
routes/
middlewares/
database/
```

---

#  Environment Variables

## Client (.env.local)

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

---

## Server (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

BETTER_AUTH_SECRET=your_secret

BETTER_AUTH_URL=http://localhost:3000
```

---

# 📦 Installation

## Client

```bash
git clone https://github.com/mdabgal/nexthire-client.git

cd nexthire-client

npm install

npm run dev
```

---

## Server

```bash
git clone https://github.com/mdabgal/nexthire-server.git

cd nexthire-server

npm install

npm run dev
```

---

#  Main Pages

- Home
- Jobs
- Job Details
- Apply Job
- Login
- Register
- About
- Contact
- My Applications
- Dashboard
- Add Job
- Manage Jobs

---

#  Role Based Access

### Employer

- Add Job
- Edit Job
- Delete Job
- Applications

### Job Seeker

- Browse Jobs
- Apply Job
- My Applications

---

#  Dashboard

Employer Dashboard includes

- Total Jobs
- Total Applications
- Total Users
- Dashboard Statistics
- manage jobs
---

#  Author

Jannati

Frontend Developer (MERN Stack)

GitHub:
https://github.com/mdabgal

Portfolio:
https://my-portfolio-ecru-two-25.vercel.app

LinkedIn:
https://www.linkedin.com/in/jannati-jannati-0203693b4/
---

 If you like this project, don't forget to give it a star.