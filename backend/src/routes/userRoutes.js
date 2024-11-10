import express from 'express';
import { googleAuth } from '../controllers/userControllers.js'

const router=express.Router()

router.post('/googleauth',googleAuth)

export default router