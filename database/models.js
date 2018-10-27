const Sequelize = require("sequelize");
const { connection } = require("./index.js");

const Product = connection.define("product", {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  salePrice: {
    type: Sequelize.INTEGER
  },
  sport: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  team: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.FLOAT
  },
  num_ratings: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
});

const Category = connection.define("category", {
  name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  featured: {
    type: Sequelize.BOOLEAN
  }
});

Category.sync({ force: true }).then(() => {
  console.log("successfully created Category table!");
});

Product.sync({ force: true }).then(() => {
  console.log("successfully created Product table!");
});

module.exports.Product = Product;
module.exports.Category = Category;
