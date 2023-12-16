import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import clientRoutes from './routes/client.js'
import generaltRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'
import mongoose, { mongo } from 'mongoose';

//data imports
import User from './models/User.js';
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';


import   {dataUser, dataProduct, dataProductStat, dataTransaction,dataOverallStat, dataAffiliateStat } from './data/index.js'

/* CONFIGURATION */

dotenv.config(); // para configurar variable entorno
const app = express();  // para configurar express --> Se está creando una instancia de la aplicación Express.

/*Se están configurando varios middlewares de Express, como el
 manejo de datos JSON, la seguridad con Helmet, 
la política de inserción cruzada de origen, el registro con
 Morgan, el análisis de cuerpos de solicitud JSON
 y URL codificados, y la habilitación del CORS. */

app.use(express.json()); //leer archivocs json
app.use(helmet()); // mejorr la seguridd de la app
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan('common'));//se está configurando para permitir solicitudes desde cualquier origen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors()); // permite que recursos web en una página web se soliciten desde otro dominio fuera del dominio 


/*  ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generaltRoutes);
app.use('/management',managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`server Port: ${PORT} `))

    /* ONLY ADD DATA ONE TIME  */

    /* Solo agregue datos una vez */
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
   // User.insertMany(dataUser);
  // Transaction.insertMany(dataTransaction);
   //OverallStat.insertMany(dataOverallStat);
   //AffiliateStat.insertMany(dataAffiliateStat)

}).catch((error)=>console.log(`${error} no te pudo conectar`))