const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
    }
);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});