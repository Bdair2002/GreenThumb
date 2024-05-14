const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'dagmar.conn61@ethereal.email',
      pass: 'z74fErA5xPRsz2bmxr',
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Mohammad Bdair <s12027880@stu.najah.edu>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
