const express = require('express');
const fs = require('fs');
const app = express();
 
app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, html) => {
        if (err) return res.status(500).send("Error loading template.");
 
        const data = {
            NAME: process.env.NAME || 'N/A',
            AGE: process.env.AGE || 'N/A',
            CITY: process.env.CITY || 'N/A',
            PHONE: process.env.PHONE || 'N/A',
        };
 
        const rendered = html.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '');
        res.send(rendered);
    });
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
