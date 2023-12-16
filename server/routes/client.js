import  express  from "express";
import {getCustomers, getProducts, getTransactions,getGeography} from '../controllers/client.js'

const router = express.Router();
router.get('/products',getProducts);
router.get('/customers',getCustomers);
router.get('/transactions',getTransactions);
router.get('/geography',getGeography)



export default router;