const transporter = require("./nodemailer");
require("dotenv").config();

const sendEmail = async (email_user, descrizione) => {
  const email = {
    from: email_user,
    to: process.env.EMAIL_USER,
    subject: "Hai un nuovo messaggio",
    text: "Hai una nuova notifica",
    html: `<b>${descrizione}</b>`,
  };
  await transporter.sendMail(sendEmail);
};

module.exports = sendEmail;
