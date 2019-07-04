const express = require("express");
const app = express();
const db = require('./models/index');

app.listen(3636, console.log("servidor rodando"));  

app.use("/user", require("./routes/user"));

db.sequelize.sync();
