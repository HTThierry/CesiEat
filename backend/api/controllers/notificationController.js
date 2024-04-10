//const sendVerificationEmail = require('../services/sendVerificationEmail'); // Assurez-vous que c'est le chemin correct

const nodemailer = require('nodemailer');

// Fonction pour envoyer l'email
async function sendVerificationEmail(email, code) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Your verification code',
        text: `Your verification code is: ${code}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email: ', error);
        return false;
    }
}

// Contrôleur pour gérer la requête POST
exports.sendCodeByEmail = async (req, res) => {
    const { email, code } = req.body;

    if (!email || !code) {
        return res.status(400).json({ message: 'Email and code are required.' });
    }

    const emailSent = await sendVerificationEmail(email, code);
    if (emailSent) {
        res.status(200).json({ message: 'Verification code sent to email.' });
    } else {
        res.status(500).json({ message: 'Failed to send verification code.' });
    }
};

