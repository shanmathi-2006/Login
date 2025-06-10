// app.js

const express = require('express');
const path = require('path'); // Import the 'path' module to help with file paths

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// --- Routes ---

// Route 1: Serve the Login Page as the default route
app.get('/', (req, res) => {
  // Use res.sendFile to send the HTML file directly
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route 2: Handle POST requests for login (This is where you'd typically process login)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // --- VERY BASIC AND INSECURE LOGIN LOGIC (FOR DEMO ONLY) ---
  if (username === 'user' && password === 'pass') {
    res.send(`<h1>Welcome, ${username}!</h1><p>You have successfully logged in.</p><p><a href="/">Go back to login</a></p>`);
  } else {
    res.status(401).send(`<h1>Login Failed</h1><p>Invalid username or password.</p><p><a href="/">Try again</a></p>`);
  }
  // --- END OF INSECURE LOGIN LOGIC ---
});

// Route for a "dashboard" or "home" after login (example)
app.get('/dashboard', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dashboard</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Welcome to your Dashboard!</h1>
                <p>This is a protected page after login.</p>
                <p><a href="/">Logout (Go back to login)</a></p>
            </div>
        </body>
        </html>
    `);
});

// Route 3: Catch-all for 404 Not Found errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, that page doesn't exist!");
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});