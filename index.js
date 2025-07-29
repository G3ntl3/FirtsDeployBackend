const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const ejs = require("ejs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URI = process.env.mongodbUri;
const PORT = process.env.port;
const path = require("path");
const user_router= require('./Router/user.route')
app.use("/user",user_router);


app.set("view engine", "ejs");
app.use(express.json());
// Public route
app.get("/", (req, res) => {
  res.send("Hello from Express with Mongo, JWT, CORS, etc!");
});
app.use(express.static(path.join(__dirname, "public")));


app.get("/homepage", (req, res) => {
  res.send("welcome");
});

app.post("/homepage", (req, res) => {});

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// user Schema








// app.post('/login', (req, res) => {
//   const userData= {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email:req.body.email
//   }
//   console.log(userData);
//   userModel.findOne({email:userData.email})
//     .then(result => {
//       console.log(result);
//       res.send("found user")

//     })
//     .catch((error) => {
//       console.log(error.message)
//     })

// })

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

