const express = require("express");
const customerRouter = require("./v1/routes/customerRoutes");
const employeeRouter = require("./v1/routes/employeeRoutes");
const orderRouter = require("./v1/routes/orderRoutes");
const productRouter = require("./v1/routes/productRoutes");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/products', productRouter);

app.use((req, res) => {
    res.status(404).send("Page not found!");
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});