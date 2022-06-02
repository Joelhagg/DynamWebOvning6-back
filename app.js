const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mysql = require("mysql2");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
const productRouter = require("./routes/product");
const officesRouter = require("./routes/offices");
const employeesRouter = require("./routes/employees");

const app = express();

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "admin",
  password: "admin",
  database: "classicmodels",
});

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/product", productRouter);
app.use("/offices", officesRouter);
app.use("/employees", employeesRouter);

module.exports = app;
