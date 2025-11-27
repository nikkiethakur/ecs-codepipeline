const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on ${port}`);
});
