const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('SendGrid Api Key goes here!');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to sendgrid tutorial backend!")
});

app.post('/sendgrid', (req, res) => {
    console.log(req.body);
    const email = {
        to: req.body.recipient,
        from: req.body.sender,
        subject: req.body.subject,
        text: req.body.text
    }
    sgMail.send(email)
    .then(message => console.log(message))
    .catch(error => console.error(error));

});

app.listen(5000, (req, res) => {
    console.log("now listening on port 5000");
});