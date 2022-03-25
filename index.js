const app = require('express')();
require('dotenv').config();
const api = require('./routes/api');

app.use("/api", api);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on ${process.env.APP_PORT}`);
});