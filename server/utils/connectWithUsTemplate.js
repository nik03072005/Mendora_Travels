const getConnectWithUsTemplate = ({ name, email, phone,destination, message }) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .details {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
        }
        .details p {
            margin: 10px 0;
        }
        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New "Connect With Us" Request</h1>
        <p>Hi Admin,</p>
        <p>A new user has submitted a "Connect With Us" request.</p>
        <div class="details">
            <h3>Request Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Destination Name:</strong> ${destination}</p>
            <p><strong>Message:</strong> ${message || 'None'}</p>
        </div>
        <p>Please reach out to the user at your earliest convenience.</p>
        <a href="mailto:${email}" class="button">Contact User</a>
        <p>Best regards,<br>Website Notification System</p>
    </div>
</body>
</html>
`;

export default getConnectWithUsTemplate