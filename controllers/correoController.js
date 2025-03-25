import brevo from '@getbrevo/brevo';


export const sendEmailToUser = async (request, response) =>{

    const {nombre, email, asunto, mensage, emailUser, userName } = request.body;
    try {
        const apiInstance =  new brevo.TransactionalEmailsApi();
    
        apiInstance.setApiKey(
            brevo.TransactionalEmailsApiApiKeys.apiKey,
            process.env.EMAIL_API
        )
        
        const sendSmtpEmail = new brevo.SendSmtpEmail();
        
        sendSmtpEmail.subject = `${asunto}`;
        sendSmtpEmail.to = [
            {email: emailUser, name : userName}
            
        ];
        sendSmtpEmail.htmlContent = `
            <html>
                <body>
                <p>${mensage}</p>
                </body>
            </html>`;
        
        sendSmtpEmail.sender = {
            name : nombre,
            email: email
        }
        
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        response.status(200).json({mensage: "correo enviado exitosamente"});
        console.log(result);    
    } catch (error) {
        response.status(400).json({error: error.message});
        console.log(error)
    
    }
    
}
