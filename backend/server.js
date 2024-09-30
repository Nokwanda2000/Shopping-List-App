
const express = require('express');
const cors = require('cors');
const db = require('better-sqlite3')('database.db');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

