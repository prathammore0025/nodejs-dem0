# nodejs-dem0

# Backend Deployment
## Install Required Software:

Install Node.js and npm:
```
sudo apt update
sudo apt install -y nodejs npm
```
## Install MongoDB tools (optional, if you need local MongoDB):
```
sudo apt install -y mongodb
```
Clone the Backend Repository:

Navigate to your desired directory and clone the backend repository:
```
git clone <your_backend_repo_url>
cd backend
```
## Install Dependencies:
```
npm install
```
## Set Up Environment Variables:

Create a .env file in the backend folder:
```
nano .env
```
Add your MongoDB Atlas connection string:
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```
## Start the Backend Server:
```
node server.js
```
# The backend will be available at http://localhost:5000/api/data.

# ------------------------------------------------------------------------------------

# Frontend Deployment
Clone the Frontend Repository:

Navigate to your desired directory and clone the frontend repository:
```
git clone <your_frontend_repo_url>
cd frontend
```
Update Backend URL:

Open the app.js file in a text editor:
```
nano app.js
```
Update the fetch URL to point to your local backend:
```
const response = await fetch('http://localhost:5000/api/data');
```
Serve Frontend Files:

## Install a simple HTTP server to serve static files:
```
sudo npm install -g serve
```
Serve the frontend:
```
serve -d . -p 3000
```
The frontend will be available at http://localhost:3000.

