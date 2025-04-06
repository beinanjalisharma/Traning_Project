const express = require('express');
const app = express();
import cors from 'cors';
// import { router } from './Routes/user.routes';
import {AppDataSource} from './config/database'
import { router } from './Routes/auth.routes';
const {productRouter} = require('./Routes/product.routes');
import { vendorRouter } from './Routes/vendor.routes';
import dotenv from 'dotenv';
import {customerrouter}  from './Routes/user.routes';
dotenv.config();

AppDataSource.initialize()
.then(()=>console.log("database connected..."))
.catch(error=>console.log("Database is not conected..",error))

app.use(express.json());

app.use(cors());


app.use('/user', router);
app.use('/customor',customerrouter);
app.use('/product',productRouter) // Product routes
app.use('/vendors',vendorRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    // console.log(`Server started  http://localhost:${PORT}`);


    
