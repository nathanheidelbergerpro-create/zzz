import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/report', async(req,res)=>{
  const {product_url}=req.body;
  res.json({success:true, pdf_url:"https://example.com/report.pdf"});
});

app.listen(3000, ()=> console.log("Backend running"));