const express=require('express');
const colors=require('colors');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const {connectDB}=require('./config/db');
const testRouter=require('./routes/testRouter');
const authRouter=require('./routes/authRouter');
const userRouter=require('./routes/userRouter');
const resturantRouter=require('./routes/resturantRouter')

dotenv.config();

connectDB();

const app=express();



app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use('/api/v1/test',testRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/resturant',resturantRouter);
app.get('/',(req,res)=>{
    return res.status(200).send("<h1>welcom</h1>");
})




const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.white.bgMagenta);
});