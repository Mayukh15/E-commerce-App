const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
mongoose.connect('mongodb+srv://mayukhadhikari2022:mayukhadhikari2024@cluster0.demnqp5.mongodb.net/'

)
.then(()=>console.log("MongoDb Connected"))
.catch((error)=>console.log(error));
const app=express();
const port=3000;

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);   
})
