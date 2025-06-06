const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET home page
app.get("/", function (req, res) {
    res.render('app',{ status: null, msg: null });
});

// POST to save message
app.post("/create", function (req, res) {
  const { name, email, message } = req.body;

  if (!message) {
    return res.render("app", { status: "error", msg: "❌ Message content is missing!" });
  }

  const fileName = `files/${Date.now()}_${name || "anonymous"}.txt`;
  const fileContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      return res.render("app", { status: "error", msg: "❌ Something went wrong. Please try again." });
    }
    res.render("app", { status: "success", msg: "✅ Message successfully sent!" });
  });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
