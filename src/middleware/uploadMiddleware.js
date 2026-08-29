import multer from 'multer';
import CloudinaryStorage from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const crearUploadMiddleware = (carpeta) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `fitzone/${carpeta}`,
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      transformation: [{ width: 800, height: 800, crop: 'limit' }]
    }
  });

  return multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith('image/')) {
        return cb(new Error('Solo se permiten archivos de imagen'), false);
      }
      cb(null, true);
    }
  });
};

export default crearUploadMiddleware;