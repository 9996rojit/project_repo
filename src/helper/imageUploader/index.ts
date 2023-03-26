const multer = require('multer')

const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");

require('dotenv').config();


// const storage = multer.memoryStorage()

// const upload = multer({ storage })

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.API_KEY as string,
    api_secret: process.env.API_SECRET as string
})

export function fileUploadHandler(folderName: string) {
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
            folder: folderName,
        },
    });
    const upload = multer({ storage });

    return upload
}




export const getFileName = (fileName: string): string => fileName.split('/upload')[1]
