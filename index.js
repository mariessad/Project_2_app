// requiring and initializing express
const express = require("express");

const app = express();

// create mongoose SCHEMA
const mongoose = require("mongoose");

// override setting for CRUD methods
const methodOverride = require("method-override");
const Student = require("./models/students");
const Teacher = require("./models/teachers");

// link our ENV variables to our app
require("dotenv").config();

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

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
  // Student.find({}, (err, allStudents) => {
  //   console.log(err);

    res.render("Index", {
      // students: allStudents,
    });
  // });
});

// cart
app.get('/cart', (req,res) =>{
  Items.find({}, (err, allItems) => {
    console.log(err);

    res.render("Cart",{
      items: allItems
    })
  })
})
// art page
app.get('/art', (req,res) =>{
  Art.find({}, (err, allArt) => {
    console.log(err);

    res.render("Cart",{
      art: allArt
    })
  })
})

// new item
app.get("art/new", (req, res) => {
  res.render("New", {});
});

// POST
// art post
app.post("/art", (req, res) => {
  // if (req.body.isPassing === "on") {
  //   req.body.isPassing = true;
  // } else {
  //   req.body.isPassing = false;
  // }

  Item.create(req.body, (err, createdItem) => {
    console.log(err);
  });

  res.redirect("/art");
});

// Teacher POST

// edit
app.get("/art/:id/edit", (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    console.log(err);
    if (!err) {
      res.render("Edit", {
        item: foundItem,
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
  Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
    console.log(err);
    res.redirect(`/art/${req.params.id}`);
  });
});

// DELETE
app.delete("/art/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/art");
  });
});

// SEEDS -- a route where we create content dynamically

app.get("/students/seed", (req, res) => {
  Student.create(
    [
      { name: "student1", gpa: "2.0", isPassing: false },
      { name: "student2", gpa: "4.0", isPassing: true },
    ],
    // callback function
    (err, data) => {
      res.redirect("/students");
    }
  );
});

// show
app.get("/students/:id", (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    console.log(err);
    res.render("Show", {
      student: foundStudent,
    });
  });
});
// Teacher show
app.get("/teachers/:id", (req, res) => {
  Teacher.findById(req.params.id, (err, foundTeacher) => {
    console.log(err);
    res.render("Show", {
      teacher: foundTeacher,
    });
  });
});

// Run the server
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
