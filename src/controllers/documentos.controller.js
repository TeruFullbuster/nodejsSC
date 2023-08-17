import {pool} from '../db.js'

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "pongo" as result')
     res.json(result[0])
 }

export const getDocumento  = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM ExpedienteAzul WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal al usar id'
        })
    } 
}

export const naContrados  = async (req, res) => {
    const token = "PROBANDO"
        try {
            const modelo = req.query.token;
            const marca = req.query.marca;
            if(token === modelo){
                const [rows] = await pool.query('SELECT  id, marca, modelo, sub_marca, descripcionG,descripcion'+marca+',cvic'+marca+' FROM CatalogoH WHERE descripcion'+marca+' = "N/A";')
                res.json(rows)
            }else{
                return res.status(500).json({
                    message: 'Token Erroneo'
                })
            }

    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal al usar id'
        })
    } 
}
export const EditaNA = async (req, res) =>{

    const {id, marca, correcion, correcioncvic} = req.body
    const token = "PROBANDO"
    const respuestaToken = req.query.token;
    if(respuestaToken ===  token){
        try {        
            const [rows] = await pool.query('UPDATE CatalogoH SET descripcion'+marca+' = ?, cvic'+marca+' = ?  WHERE id = ?',[correcion, correcioncvic, id])
            //console.log(rows) 
            res.send({
                message: "Registro Exitoso",
                id: id,
                marca
            })
        } catch (error) { 
            console.log(error) 
            return res.status(500).json({
                message: ' Algo esta mal'
            })
        }
    }else{
        return res.status(401).json({
            message: 'No Autorizado'
        })
    }
    
}

export const EditaNACvic = async (req, res) =>{

    const {id, marca, correcion} = req.body
    const token = "PROBANDO"
    const respuestaToken = req.query.token;
    if(respuestaToken ===  token){
        try {        
            const [rows] = await pool.query('UPDATE CatalogoH SET cvic'+marca+' = ? WHERE id = ?',[correcion, id])
            console.log(rows) 

            res.send({
                message: "Registro Exitoso",
                id: id,
                marca
            })

        } catch (error) { 
            console.log(error) 
            return res.status(500).json({
                message: ' Algo esta mal'
            })
        }
    }else{
        return res.status(401).json({
            message: 'No Autorizado'
        })
    }
    
}
