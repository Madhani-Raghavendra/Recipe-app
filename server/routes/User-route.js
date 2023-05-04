import express from 'express'
import * as details from '../controlers/usercontroller.js'

const router=express.Router()

router.get('/',details.getAllUser)
router.post('/login',details.login)
router.post('/signup',details.signup)

export default router