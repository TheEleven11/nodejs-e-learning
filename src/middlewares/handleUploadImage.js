import multer from 'multer';
import { mkdirSync } from 'fs';
import AppError from '../utils/appError.js';

const whitelist = ['image/png', 'image/jpeg', 'image/jpg'];

const createUploadDir = (dirName) => {
  return (req, res, next) => {
    mkdirSync(`public/imgs/${dirName}`, {
      recursive: true,
    });
    next();
  };
};

export const checkFile = (req, res, next) => {
  console.log(req);
  return next();
};

const getUploadMulter = (imgField, dirName) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, `public/images/${dirName}/`);
    },
    filename: (req, file, callback) => {
      if (!whitelist.includes(file.mimetype)) {
        return callback(
          new AppError('This file is not allowed. Please provide images.', 403)
        );
      }

      let prefix = dirName.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`
      );

      req.body[imgField] = `${prefix.slice(0, -1)}-${
        req.params.id
      }-${Date.now()}.jpeg`;

      callback(null, req.body[imgField]);
    },
  });

  return multer({ storage });
};

export const handleUploadImage = (imgField, dirName) => {
  return [
    createUploadDir(dirName),
    checkFile,
    getUploadMulter(imgField, dirName).single(imgField),
  ];
};
