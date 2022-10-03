// requiring and initializing express
const express = require("express");

const app = express();

// create mongoose SCHEMA
const mongoose = require("mongoose");

// override setting for CRUD methods
const methodOverride = require("method-override");
const Art = require("./models/ArtModel");
const seedArt = require("./models/seedArt");
const seedJewelry = require("./models/seedJewelry");
const Jewelry = require("./models/JewelryModel");
const Fiber = require("./models/FiberModel");
const Cart = require("./models/CartModel");

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

//--------------Routes (CRUD)

//--------------GET

// index home page
app.get("/home", (req, res) => {
  // Art.find({}, (err, allArt) => {
  //   console.log(err);

  res.render("Index", {
    // art: allArt,
  });
  // });
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
// new art item
app.get("art/new", (req, res) => {
  res.render("NewArt", {});
});
// cart page
app.get("/cart", (req, res) => {
  Cart.find({}, (err, allCart) => {
    console.log(err);

    res.render("Cart", {
      cart: allCart,
    });
  });
});

// fiber art
app.get("/fiber", (req, res) => {
  Fiber.find({}, (err, allFiber) => {
    console.log(err);

    res.render("Fiber", {
      fiber: allFiber,
    });
  });
});
// jewelry
app.get("/jewelry", (req, res) => {
  Jewelry.find({}, (err, allJewelry) => {
    console.log(err);

    res.render("Jewelry", {
      jewelry: allJewelry,
    });
  });
});

//--------------POST

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
app.post("/fiber", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }

  Fiber.create(req.body, (err, createdFiber) => {
    console.log(err);
  });

  res.redirect("/fiber");
});

app.post("/jewelry", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }

  Jewelry.create(req.body, (err, createdJewelry) => {
    console.log(err);
  });

  res.redirect("/jewelry");
});

app.post("/cart", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }
  Cart.create(req.body, (err, createdCart) => {
    console.log(err);
  });

  res.redirect("/cart");
});

//--------------GET edit
app.get("/art/:id/edit", (req, res) => {
  Art.findById(req.params.id, (err, foundArt) => {
    console.log(err);
    if (!err) {
      res.render("ArtEdit", {
        art: foundArt,
        //pass in the foundItem so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.get("/fiber/:id/edit", (req, res) => {
  Fiber.findById(req.params.id, (err, foundFiber) => {
    console.log(err);
    if (!err) {
      res.render("FiberEdit", {
        fiber: foundFiber,
        //pass in the foundItem so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
app.get("/jewelry/:id/edit", (req, res) => {
  Jewelry.findById(req.params.id, (err, foundJewelry) => {
    console.log(err);
    if (!err) {
      res.render("JewelryEdit", {
        jewelry: foundJewelry,
        //pass in the foundItem so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

//-------------- PUT patch to update
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
app.put("/jewelry/:id", (req, res) => {
  Jewelry.findByIdAndUpdate(req.params.id, req.body, (err, updatedJewelry) => {
    console.log(err);
    res.redirect(`/jewelry/${req.params.id}`);
  });
});
app.put("/fiber/:id", (req, res) => {
  Fiber.findByIdAndUpdate(req.params.id, req.body, (err, updatedFiber) => {
    console.log(err);
    res.redirect(`/fiber/${req.params.id}`);
  });
});

//-------------- DELETE
app.delete("/art/:id", (req, res) => {
  Art.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/art");
  });
});
app.delete("/jewelry/:id", (req, res) => {
  Jewelry.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/jewelry");
  });
});
app.delete("/fiber/:id", (req, res) => {
  Fiber.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/fiber");
  });
});
app.delete("/cart/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/cart");
  });
});

// SEEDS -- routes where we create content dynamically

app.get("/art/seed", (req, res) => {
  Art.create(seedArt);
  // callback function
  res.redirect("/art");
});
app.get("/jewelry/seed", (req, res) => {
  Jewelry.create(seedJewelry);
  // callback function
  res.redirect("/jewelry");
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
app.get("/jewelry/:id", (req, res) => {
  Jewelry.findById(req.params.id, (err, foundJewelry) => {
    console.log(err);
    res.render("Jewelry", {
      jewelry: foundJewelry,
    });
  });
});

// Run the server
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
