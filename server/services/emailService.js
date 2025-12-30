import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false // Optional
    }
});

const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
            to,
            subject,
            html,
        });
        console.log('Email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Email error:', error);
        throw error;
    }
};

export default sendEmail;