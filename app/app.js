const express = require('express');
const app = express();   //create the web application

app.get('/', (req, res) => {
  res.send('Hello From EKS'); //When someone opens: http://localhost:3000/ then run this code
});

app.listen(3000, () => {
  console.log('Server is running on port 3000'); // Server will listen on port 3000
});