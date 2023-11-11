const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/EMDR', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected'))
.catch(err => console.error(err));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});