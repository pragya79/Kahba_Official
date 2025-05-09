import express from 'express';
import {submitUser} from '../controllers/user.controller.js';
import { addCandidate } from '../controllers/carrier.controller.js';

const router = express.Router();


// post user data
router.post('/user', submitUser);


export default router;
