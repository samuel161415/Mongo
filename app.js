const express=require('express')
const morgan=require('morgan')
const first=require('./model/first')

const mongoose=require('mongoose');

const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
  app.use(morgan('dev'));


//mongodb+srv://<username>:<password>@cluster0.m0bug.mongodb.net/?retryWrites=true&w=majority

  const mongoAtlasUri='mongodb+srv://sam:0P85ni8nZ7F6qdeu@cluster0.m0bug.mongodb.net/?retryWrites=true&w=majority'
  try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
   
 app.get('/add',async(req,res)=>{
   const value=new first({
    title:"my first altas data",
    snippet:"about the atlas",
    body:"hi there how are you"
   });
   try{
    const returnValue=await value.save()   // used to save data to database
    res.json(returnValue)
  }
  catch(error){
  res.send('error'+ error)
  }
 })
 console.log("updated branch");
app.listen(3000,()=>console.log('app is listning'));