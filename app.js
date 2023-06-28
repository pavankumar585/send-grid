const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const fs = require("fs");

sgMail.setApiKey(process.env.SENDGRID_API_SECRET);

async function sendMail() {
  const pathToAttachment = `${__dirname}/attachment.txt`;
  const attachment = fs.readFileSync(pathToAttachment).toString("base64");

  const options = {
    // from: "pavanmaddala16@gmail.com",
    from: {
      name: "Yours Truly Pavan Kumar 😉",
      email: "pavanmaddala16@gmail.com",
    },
    to: ["hemanthreddy9133@gmail.com", "pavankumarmaddala585@gmail.com"],
    subject: "testing send grid",
    text: "Hello hemanth this is pavan.",
    html: "<srong>I'm testing an send grid, this mail from send grid.</strong>",
    attachments: [
      {
        content: attachment,
        filename: "attachment.txt",
        type: "plain/text",
        disposition: "attachment",
      },
    ],
  };

  try {
    await sgMail.send(options);
    console.log("Mail sent successfully!");
  } catch (error) {
    console.log(error);
  }
}

sendMail();
