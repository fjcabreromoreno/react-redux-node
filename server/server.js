const express = require("express");
const app = express();
const mongoose = require("mongoose");

const UserModel = require("./models/Users");
const BookModel = require("./models/Books");

mongoose.connect(
  "mongodb+srv://fcabreromoreno:Rocio_09042022@cluster0.6cqoghk.mongodb.net/mernTutorial?retryWrites=true&w=majority"
);

// app.get("/users", (req, res) => {
//   res.json([
//     { name: "Paco", position: "Senior Front End" },
//     { name: "Carlos", position: "Arquitect & Team Leader" },
//     { name: "Jorge", position: "Junior Front End" },
//   ]);
// });

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(result);
    }
  });
});

app.get("/getBooks", (req, res) => {
  BookModel.find({}, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(result);
    }
  });
});

app.post("");

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
