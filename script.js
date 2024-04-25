const express = require('express');
const productRouter = require('./routes/productsRoutes.js');
const userRouter = require('./routes/usersRoutes.js');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.k26rrh3.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'

const databaseUser = 'gvgupta789';
const databasePassword = 'abcd1234';
const dataBaseName = 'AMAZON-BACKEND';

let dbLink = url.replace('$_USERNAME_$',databaseUser);
dbLink = dbLink.replace('$_PASSWORD_$',databasePassword);
dbLink = dbLink.replace('$_DB_NAME_$',dataBaseName);

mongoose.connect(dbLink)
        .then(()=>{
            console.log("database connected");
        }).catch(()=>{
            console.log("database not connected");
        })

app.listen(3000,()=>console.log("app connected"));








// const express = require('express');
// const productsRouter = require('./routes/productsRoutes.js');
// const test = require('./models/productModel.js');
// const mongoose  = require('mongoose');
// const app = express();

// app.use('/api/products',productsRouter);

// const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.9qgkpgb.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
// const databaseUser = 'govindgupta1928';
// const databasePassword = 'abcd1234';
// const dataBaseName = 'AMAZON-BACKEND';

// let dbLink = url.replace("$_USERNAME_$",databaseUser);
// dbLink = dbLink.replace("$_PASSWORD_$",databasePassword);
// dbLink = dbLink.replace("$_DB_NAME_$",dataBaseName);

// mongoose.connect(dbLink)
//     .then(
//         ()=> console.log('database connected')
//     );

// app.listen(2000,
//     ()=>console.log("app started")
// );