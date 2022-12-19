const express = require('express');
const app = express();



app.use(express.static('public'));

async function connectTest() {
    console.log("Connection successful!")
}

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening at port ${port}`));