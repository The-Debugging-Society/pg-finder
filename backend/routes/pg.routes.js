import express from 'express';
import { Pg } from '../config/db.js';
const {storage} = require('../cloudConfig.js');
const multer = require('multer');
const upload = multer({storage});
const router = express.Router();



export default  router;