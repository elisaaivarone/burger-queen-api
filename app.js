const express = require('express');
const app = express();
const db = require('./models/index');
const chalk = require('chalk');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.listen(6666, console.log(chalk.red("Servidor rodando")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/user", require("./router/user"))
app.use("/orders", require("./router/orders"))
app.use("/products", require("./router/products"))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



db.sequelize.sync();