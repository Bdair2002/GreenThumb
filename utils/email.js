const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'dagmar.conn61@ethereal.email',
      pass: 'z74fErA5xPRsz2bmxr',
    },
  });

  const mailOptions = {
    from: 'Mohammad Bdair <s12027880@stu.najah.edu>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
