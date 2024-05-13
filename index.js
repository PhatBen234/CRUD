const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
//middleware
app.use(express.json());
//routes
app.use("/api/products", productRoute);

//Home
app.get("/", (req, res) => {
  res.send("Hello World from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://vuletanphat7215got:qCd7mfsxfCeNWIqU@backenddb.rwizcac.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connect to DB");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch(() => {
    console.log("Failed to connect DB");
  });
