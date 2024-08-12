import { Email } from "./smtp";
import { SMTPClient } from "smtp-client";
// import {nodemailer} from "nodemailer";
// const nodemailer = require("nodemailer");

export const sendMail = () => {
  console.log("Sending...");
  Email.send({
    Host: "smtp.office365.com",
    Username: "email-host",
    Password: "pass",
    To: "...",
    From: "...",
    Subject: "Testing js - office",
    Body: "Hola mundo del email port 578",
  }).then((message) => alert("mail sent successfully"));
};

export const sendMailClient = () => {
  let s = new SMTPClient({
    host: "smtp.office365.com",
    port: 587,
  });

  (async function () {
    await s.connect();
    await s.greet({ hostname: "smtp.office365.com" }); // runs EHLO command or HELO as a fallback
    await s.authPlain({
      username: "email-host",
      password: "pass",
    }); // authenticates a user
    await s.mail({ from: "email-host" }); // runs MAIL FROM command
    await s.rcpt({ to: "..." }); // runs RCPT TO command (run this multiple times to add more recii)
    await s.data("Hola mundo mail source"); // runs DATA command and streams email source
    await s.quit(); // runs QUIT command
  })().catch(console.error);
};
