const Product = require("../models/product");
require("dotenv").config();
const connectDatabase = require("../db/database");

const products = require("../data/product");

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted");

    await Product.insertMany(products);
    console.log("Product seeded");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
