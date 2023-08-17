import { Router } from "express";
import {getDocumento, naContrados, EditaNA, EditaNACvic} from '../controllers/documentos.controller.js'

const router = Router()

router.get('/documentos/:id' , getDocumento)

router.get('/naporMarca' , naContrados)

router.post('/EditaNA' , EditaNA)

router.post('/EditaNACvic' , EditaNACvic)

export default router