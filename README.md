# GlobalTechShell

GlobalTechShell is an AI-integrated technology partner offering enterprise-grade web development, app development, UI/UX design, and digital marketing services.

This repository consists of a modern Next.js frontend client and an Express/Node.js backend server.

## Installation & Setup

Before running the application, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd GlobalTechShell/Website
```

### 2. Frontend Setup (Next.js)
Open a terminal and navigate to the root directory `Website`:

```bash
# Install dependencies
npm install

# Run the frontend development server
npm run dev
```
The client dashboard will be running at `http://localhost:3000`.

### 3. Backend Setup (Node.js & Express)
Open a *new* terminal split or tab, and navigate to the `server` folder:

```bash
cd server

# Install dependencies
npm install

# Run the backend development server using nodemon
npm run dev
```

The backend API will run natively at `http://localhost:5000` assuming your `.env` port isn't altered. MongoDB MUST be connected through your `server/.env` file with the string `MONGODB_URI=<your-db-string>`. 

### Built With
- **Frontend**: Next.js (React), CSS Variables, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT & bcrypt

### Special Notes
Client portals and signup endpoints have been explicitly disabled. Authentication is reserved exclusively via the `/admin/login` interface for internal tracking and statistical data modifications.
