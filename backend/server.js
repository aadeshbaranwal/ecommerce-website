import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import uploadRoute from './routes/uploadRoute.js';
import orderRoute from './routes/orderRoute.js';
import productRoute from './routes/productRoute.js';

import bodyParser from 'body-parser';
import data from './data.js';

const mongodbUrl = config.MONGODB_URL;
mongoose.set('useUnifiedTopology', true);
mongoose
	.connect(mongodbUrl, {
		useNewUrlParser : true,
		useCreateIndex : true
	})
	.catch((error) => {console.log(error.reason)});

const app = express();
app.use(bodyParser.json());

// app.get('/', (res,req) => {
// 	res.send(data);
// })

app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});



app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});