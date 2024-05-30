const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    console.log("test test hrllo test test");
    res.json({
        params : {...req.query,},
        data : "777777"
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;
