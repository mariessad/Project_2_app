// requiring and initializing express
const express = require("express");

const app = express();

// create mongoose SCHEMA
const mongoose = require("mongoose");

// override setting for CRUD methods
const methodOverride = require("method-override");
const Art = require("./models/ArtModel");
const seedArt = require("./models/seedArt");
// const Jewelry = require("./models/JewelryModel");
// const Fiber = require("./models/FiberModel");
// const Cart = require("./models/CartModel");

// link our ENV variables to our app
require("dotenv").config();

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static("public"));

// Middlewear

// set view engine, creates link to JSX
app.set("view engine", "jsx");

// links JSX/ReactViews to App
app.engine("jsx", require("express-react-views").createEngine());

// helps us parse our req.body
app.use(express.urlencoded({ extended: false }));

// instantiates methodOverride for CRUD actions
app.use(methodOverride("_method"));

// establishes middlewear process
app.use((req, res, next) => {
  console.log("routes");
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
//Routes (CRUD)

// index home
app.get("/home", (req, res) => {
  // Art.find({}, (err, allArt) => {
  //   console.log(err);

  res.render("Index", {
    // art: allArt,
  });
  // });
});

// cart
app.get("/cart", (req, res) => {
  Items.find({}, (err, allItems) => {
    console.log(err);

    res.render("Cart", {
      items: allItems,
    });
  });
});
// art page
app.get("/art", (req, res) => {
  Art.find({}, (err, allArt) => {
    console.log(err);

    res.render("Art", {
      art: allArt,
    });
  });
});

// new item
app.get("art/new", (req, res) => {
  res.render("NewArt", {});
});

// POST
// art post
app.post("/art", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }

  Art.create(req.body, (err, createdArt) => {
    console.log(err);
  });

  res.redirect("/art");
});

//  POST

// edit
app.get("/art/:id/edit", (req, res) => {
  Art.findById(req.params.id, (err, foundArt) => {
    console.log(err);
    if (!err) {
      res.render("Edit", {
        art: foundArt,
        //pass in the foundItem so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// put patch to update
app.put("/art/:id", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }
  Art.findByIdAndUpdate(req.params.id, req.body, (err, updatedArt) => {
    console.log(err);
    res.redirect(`/art/${req.params.id}`);
  });
});

// DELETE
app.delete("/art/:id", (req, res) => {
  Art.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/art");
  });
});

// SEEDS -- routes where we create content dynamically

app.get("/art/seed", (req, res) => {
  Art.create(seedArt);
  // callback function
  res.redirect("/art");
});

// show
app.get("/art/:id", (req, res) => {
  Art.findById(req.params.id, (err, foundArt) => {
    console.log(err);
    res.render("Art", {
      art: foundArt,
    });
  });
});

// Run the server
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
