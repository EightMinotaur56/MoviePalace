const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const contentRouter = require('./routes/contentRoute');

app.use(express.json());

app.use('/movies', contentRouter);



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
