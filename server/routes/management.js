import  express  from "express";
import {getAdmins} from '../controllers/management.js'
import { getUserPerformance } from "../controllers/management.js";

const router = express.Router();

router.get(`/admins`, getAdmins)
router.get(`/performance/:id`,getUserPerformance);

export default router;