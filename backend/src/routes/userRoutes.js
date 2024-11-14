import express from 'express';
import { googleAuth,applyData } from '../controllers/userControllers.js'

const router=express.Router()

router.post('/googleauth',googleAuth)
router.post('/apply',applyData)

export default router