const nodemailer = require('nodemailer');

async function sendVerificationEmail(user) {
    const verificationUrl = `${process.env.FRONT_END_URL}/verify-email/${user.emailVerificationToken}`;

    
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD
        }
    });

    
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: user.email,
        subject: 'Please verify your email address',
        text: `Please verify your email by clicking on this link: ${verificationUrl}`
    };

    
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        
    } catch (error) {
        console.error('Error sending email: ', error);
        
    }
}
module.exports = sendVerificationEmail;