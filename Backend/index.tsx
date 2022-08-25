const express = require("express");
const port = 8080;
const app = express();

const bodyParser = require("body-parser");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Adamhamo22:b5wnMb2UQCXy9pp2@contact.j2cwemr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

var mongoose = require("mongoose");

mongoose
  .connect(uri, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

  var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));

    db.once("open", function () {
      console.log("Connection Successful!");
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/contact", function (req, res) {
  const body = req.body;
  if (body) {
    const Email = body.email;
    const Name = body.name;
    const Message = body.message;
      // define Schema
      var ContactSchema = mongoose.Schema({
        name: String,
        email: String,
        message: String,
      });

      // compile schema to model
      var Contact = mongoose.model("Contacts", ContactSchema, "CollectedData");

      // a document instance
      var contact = new Contact({
        name: Name,
        email: Email,
        message: Message,
      });

      // save model to database
      contact.save(function (err, book) {
        if (err) return console.error(err);
        console.log(contact.name + " saved to collection.");
      });
  }
});

app.listen(port);
