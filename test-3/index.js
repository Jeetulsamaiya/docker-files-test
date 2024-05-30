const express = require('express');
const port = process.env.PORT || 5600;
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    console.log("test test hrllo test test");
    res.json({
        params : {...req.query,},
        data : "test test test est test test test test "
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;
