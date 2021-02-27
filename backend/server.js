import express, { json } from 'express';
import connectDB from './config/dbConnector';
import auth from './routes/api/auth';
import itemdetails from './routes/itemdetails';
import addbatch from './routes/addbatches';
import customerdetails from './routes/customerdetails';
import supplierdetails from './routes/supplierdetails';
import config from 'config';
import cors from 'cors';

const PORT = config.get('serverPort');

//TODO: Integrate testing!

//**********************************Inits**********************************/
const app = express();
app.use(express.json());
connectDB();
app.use(cors());
app.use(json({ extended: false }));

//Basic Sanity testing!
app.get('/', (req, res) => {
  console.log(req);
  res.send('success');
});

//**********************************Routes**********************************/
app.use('/api/user', auth);
app.use('/user/details',itemdetails);
app.use('/user',addbatch);
app.use('/user/customer',customerdetails);
app.use('/user/supplier',supplierdetails);

app.listen(PORT, () => {
  console.log('Go!');
});
