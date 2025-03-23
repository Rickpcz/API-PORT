import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

export const cloud = cloudinary.v2.config({
    cloud_name: process.env.CLOUD_SV,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_API_SECRET
})