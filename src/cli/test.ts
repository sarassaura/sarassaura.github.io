import 'dotenv/config';
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({ cloud: { cloudName: process.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME } });

const name = 'sarassaura.github.io';

const myImage = cld.image(name).format('auto').quality('auto').toURL();

console.log(myImage);
