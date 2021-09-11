import express from "express";
import cors from 'cors';
import morgan from 'morgan'; 

const app=express();

const port=3000;
app.listen(port);


//midewirll
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());



console.log("Server on port "+port);