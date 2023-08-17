import { Router } from 'express';
import {getEmpleados,createEmpleados,putEmpleados,deleteEmpleados,getEmpleado,inicioSession, createCatalog, getCatalogo, getCatalogo3, getCatalogo4, getCatalogo5, getCatalogo6, getCatalogo7, getMARCAS , getLastR, getInventario, getInventarioCH, createIdCot, getCotID, TotalMarcas} from '../controllers/empleados.controller.js'
const router = Router()

 router.get('/empleadosEjemplo/' , getEmpleados)

 router.get('/empleado/:id' , getEmpleado)
 
 router.post('/empleados' , createEmpleados)

 router.post('/catalogoN' , createCatalog)

 router.get('/UltimosRegistros' , getLastR)

 router.get('/catalogoNGet' , getCatalogo)

 router.get('/Checando' , getCatalogo3)

 router.get('/getMarcas' , getMARCAS)

 router.get('/ChecandoAnio' , getCatalogo4)

 router.get('/ChecandoMarca', getCatalogo5)

 router.get('/ChecandoHomologado', getCatalogo6)

 router.get('/ChecandoCvic', getCatalogo7)
 
 router.put('/empleados/:id' , putEmpleados)
 
 router.delete('/empleados/:id' , deleteEmpleados)

 router.post('/empleados/inicioSession' , inicioSession) 

 router.get('/InventarioTI' , getInventario)

 router.get('/InventarioCH' , getInventarioCH)

 router.post('/CreateCot', createIdCot)

 router.get('/GetCot', getCotID)

 router.get('/TotalMarcas', TotalMarcas)

export default router