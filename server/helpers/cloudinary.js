const cloudinary=require('cloudinary').v2;
const multer=require('multer');

cloudinary.config({
    cloud_name : 'db5ymxe1x',
    api_key : '264587158782742',
    api_secret : 'J9XDd9S-I05npAq5VLkE1ny1QMU'
});


//new storage 
const storage=new multer.memoryStorage();
async function imageUploadUtil(file) {
     const result=await cloudinary.uploader.upload(file,{
        resource_type :'auto'
     })
     return result;
} 

const upload=multer({storage});

module.exports={upload,imageUploadUtil};
