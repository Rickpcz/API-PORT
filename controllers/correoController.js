import nodemailer from 'nodemailer';

export const sendEmailToUser = async (request, response) => {
    try {
        const { nombre, email, asunto, mensaje, userName, emailUser } = request.body;
        console.log(request.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        // Configuración del correo a enviar
        const mailOptions = {
            from: `"${nombre}" <${email}>`,
            to: `${emailUser}`,
            subject: `${asunto}`,
            html: `
                <html>
                    <body>
                        <h1>Detalles del Mensaje</h1>
                        <p><strong>Nombre:</strong> ${nombre}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Asunto:</strong> ${asunto}</p>
                        <p><strong>Usuario:</strong> ${userName}</p>
                        <p><strong>Mensaje:</strong></p>
                        <p>${mensaje}</p>
                    </body>
                </html>
            `
        };

        // Enviar el correo
        const result = await transporter.sendMail(mailOptions);
        response.status(200).json({ mensaje: "Correo enviado exitosamente" });
        console.log(result);
    } catch (error) {
        response.status(400).json({ error: error.message });
        console.log(error);
    }
};