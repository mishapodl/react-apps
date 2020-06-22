const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mishapod@gmail.com',
        pass: 'milka13211'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    console.log('success');
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `<p style="font-size: 16px;">Email</p>
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                console.log('error');
                return res.send(erro.toString());
            }
            console.log('success');
            return res.send('Sended');
        });
    });    
});