'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'projetoquixique@gmail.com',
        pass: 'quixique7'
    }
});

module.exports.sendMail = function (email, assunto, texto){
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'no-reply@quixique.com', // sender address
      to: email, // list of receivers
      subject: assunto, // Subject line
      text: texto, // plain text body
      // html: '<b>Hello world ?</b>' // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
}