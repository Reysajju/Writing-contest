const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

let heartsDonated = 0;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the current count
app.get('/api/hearts', (req, res) => {
    res.json({ heartsDonated });
});

// Endpoint to increment the count
app.post('/api/donate', (req, res) => {
    heartsDonated++;
    res.json({ heartsDonated });
});

// Serve index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
