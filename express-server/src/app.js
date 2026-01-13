const express = require('express');
const app = express();
const PORT = 8001;

// Middleware setup
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// In-memory tasks list (migrated from FastAPI/Pydantic example)
const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Return tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

// Add a task (expects JSON body with { text: string })
app.post('/tasks', (req, res) => {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ message: 'Invalid payload, expected { text: string }' });
    }
    tasks.push(text);
    return res.json({ message: 'Task added successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});