import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/mongo';
import { Error } from 'mongoose';
const routes = require('./routes/item');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(routes);

db().then(() => {
    console.log('conection ready.')
}).catch((e)=> console.log(e.message));


app.use(express.json());

app.listen(port, () => console.log(`server started listening ar port ${port}`));

