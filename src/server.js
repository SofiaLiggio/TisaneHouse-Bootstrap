const sendEmail = require("./utilities/sendemail");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/forms", async function (req, res) {
  const { email_user, descrizione } = req.body;
  console.log(email_user, descrizione);
  await sendEmail(email_user, descrizione);

  res.json({ message: "Email inviata!" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
