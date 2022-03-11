const express=require("express");
const cors=require('cors');
const mongoose=require("mongoose");
const app=express();
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));


app.use(express.json());
mongoose.connect("mongodb+srv://kesavan:kesavan99@cluster0.7ftan.mongodb.net/cgiDB?retryWrites=true&w=majority");

app.use(cors({
    origin:'*'
}))





const itemSch={
    para:String,
    image:String
};

const cgi=mongoose.model("feed",itemSch);


app.post("/feed",(req,res)=>{
    const data=new cgi(
        {
            para:req.body.para,
            image:req.body.image
            
        }
    )
    data.save()
    .then(item=>console.log(item))
    .catch(err=>res.res.status(400).json("Error"+err));
})

app.get("/feeds",(req,res,next)=>{
    cgi.find({}).then(function(data){
        res.send(data);
    }).catch(next);
})

app.listen(3001,function (){

     console.log("express connect");
})
