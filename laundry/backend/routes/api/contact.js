const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// create order
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('number', 'Phone is required').not().isEmpty(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res, next) => {
    try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }


      const { name, email, number, message } = req.body;

      // Create a Nodemailer transporter with your email service details
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: process.env.Email,
          pass: process.env.Pass
        }
      });

      // Prepare the email options
      const mailOptions = {
        from: email,
        to: process.env.Email,
        subject: 'Laundry website Contact Form',
        html: `
                <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CleaneX</title>
</head>
<body bgcolor="#0f3462" style="margin-top:20px;margin-bottom:20px">

  <table border="0" align="center" cellspacing="0" cellpadding="0" bgcolor="white" width="650">
    <tr>
      <td>

        <table border="0" cellspacing="0" cellpadding="0" style="color:#0f3462; font-family: sans-serif;">
          <tr>
            <td>
              <h2 style="text-align:center; margin: 0px; padding-bottom: 25px; margin-top: 25px;">
                <i>clean</i><span style="color:lightcoral">X</span></h2>
            </td>
          </tr>
          <tr>
            <td style="text-align: center;">
              <h1 style="margin: 0px;padding-bottom: 25px; text-transform: uppercase;">Laundry contact form</h1>
              <p style=" margin: 0px 40px;padding-bottom: 25px;line-height: 2; font-size: 15px;">
                  Name:- ${name}
                  <br/>
                  Email:- ${email}
                  <br/>
                  Phone:- ${number}
                  <br/>
                  Message:- ${message}
              </p>
              <p style=" margin: 0px 32px;padding-bottom: 25px;line-height: 2; font-size: 15px;">
               ----------------------------------------------------------------------------------------------------------------.
              </p>
            </td>
          </tr>
        </table>
        <!-- /Child table -->
      </td>
    </tr>
  </table>
  <!-- / Main table -->
</body>

</html>
                `
        // text: `Name: ${name}\nPhone Number: ${number}\nEmail: ${email}\n\n${message}`
      };


      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.json(error);
        } else {
          return res.status(201).json({
            msg: "Email send SuccessFully."
          })
        }
      });



    }
    catch (err) {
      res.status(500).send('Server Error');
    }
  }
);


module.exports = router;