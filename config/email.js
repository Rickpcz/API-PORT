import 'dotenv/config';
import dotenv from 'dotenv';
import brevo from '@getbrevo/brevo';

dotenv.config();

export const apiInstance =  new brevo.TransactionalEmailsApi();
    
apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.EMAIL_API
)