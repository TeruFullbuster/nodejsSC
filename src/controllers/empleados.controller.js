import {pool} from '../db.js'


export const getEmpleados  = async (req, res) => {
    console.log('Si aca ando')
    console.log(req.query)
    const area = req.query.area;
    const perfil = req.query.perfil;
    try {
    const [rows] = await pool.query('SELECT * FROM EjemploEmpleados WHERE Area = ? AND Perfil = ?', [area,perfil])
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getEmpleado  = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM nempresa WHERE id = ?', [req.params.id])
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

export const createEmpleados = async (req, res) => {
    const {nombreContacto,Puesto,Celular,Mail,Razon,RFC,NombreEmpresa} = req.body
    const {Autorizada} = "0"
    try {
    const [rows] = await pool.query('INSERT INTO nempresa (nombreContacto,Puesto,Celular,Mail,Razon,RFC,NombreEmpresa,Autorizada) VALUES (?,?,?,?,?,?,?,0)', [nombreContacto,Puesto,Celular,Mail,Razon,RFC,NombreEmpresa,Autorizada])
    //console.log(rows) 
    res.send({
        message: "Registro Exitoso",
        id: rows.insertId,
        nombreContacto,
        Puesto,
        Celular,
        Mail,
        Razon,
        RFC,
        NombreEmpresa,
        Autorizada
    })
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
    
}
export const createCatalog = async (req, res) => {
    const {marca,modelo,sub_marca,descripcionG,descripcionAXA,cvicAXA,descripcionGNP,cvicGNP,descripcionQualitas,cvicQualitas,descripcionMapfre,cvicMapfre,descripcionABA,cvicABA,descripcionHDI,cvicHDI,descripcionANA,cvicANA} = req.body
    //const {Autorizada} = "0"
    try {
    const [rows] = await pool.query('INSERT INTO CatalogoH (marca,modelo,sub_marca,descripcionG,descripcionAXA,cvicAXA,descripcionGNP,cvicGNP,descripcionQualitas,cvicQualitas,descripcionMapfre,cvicMapfre,descripcionABA,cvicABA,descripcionHDI,cvicHDI,descripcionANA,cvicANA) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [marca,modelo,sub_marca,descripcionG,descripcionAXA,cvicAXA,descripcionGNP,cvicGNP,descripcionQualitas,cvicQualitas,descripcionMapfre,cvicMapfre,descripcionABA,cvicABA,descripcionHDI,cvicHDI,descripcionANA,cvicANA])
    console.log(rows) 
    res.send({
        message: "Registro Exitoso",
    })
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
    
}
export const createIdCot = async (req, res) => {
    const {Marca,Modelo,Version,DescCvic,PrecioCotInit,Nombre,Apellido,Edad,Genero,Correo,Celular,CP,ASEG,PrecioFinal} = req.body
    //const {Autorizada} = "0"
    try {
    const [rows] = await pool.execute('INSERT INTO db_Start_Motor (Marca,Modelo,Version,DescCvic,PrecioCotInit,Nombre,Apellido,Edad,Genero,Correo,Celular,CP,ASEG,PrecioFinal) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [Marca,Modelo,Version,DescCvic,PrecioCotInit,Nombre,Apellido,Edad,Genero,Correo,Celular,CP,ASEG,PrecioFinal])
    console.log(rows) 
    const idCot = rows.insertId;
    res.send({
        message: "Registro Exitoso",
        idCot: idCot
    })
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
    
}
export const getCotID  = async (req, res) => {
    try {
        console.log(req.query.idCot)
        console.log(req.query)
    const [rows] = await pool.query('SELECT * FROM db_Start_Motor WHERE idCot = ?', [req.query.idCot])
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
export const getCatalogo  = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM CatalogoH')
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}
export const getInventarioCH  = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM InventarioCH')
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}
export const getInventario  = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM InventarioTI')
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}
export const getMARCAS  = async (req, res) => {
    try {
        console.log(req.query)
    const [rows] = await pool.query('SELECT Marca FROM MarcasPopulares')
            res.json(rows)
        console.log('Marcas Populares')
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getLastR  = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM CatalogoH ORDER BY id DESC LIMIT 100')
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getCatalogo3  = async (req, res) => {
    try {
        console.log(req.params.id)
    const [rows] = await pool.query('SELECT marca FROM CatalogoH Group By marca')
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}
export const getCatalogo4  = async (req, res) => {
    try {
        console.log(req.params.id)
        const marca = req.query.marca;
        console.log("esta es la marca: " + marca)
    const [rows] = await pool.query('SELECT modelo FROM CatalogoH where marca = ? Group By modelo', [marca])
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getCatalogo5  = async (req, res) => {
   
    try {
        const marca = req.query.marca;
        const modelo = req.query.modelo;
        console.log("esta es la marca: " + marca)
        console.log("esta es la modelo: " + modelo)
    const [rows] = await pool.query('SELECT sub_marca FROM CatalogoH where marca = ? AND modelo = ? Group By sub_marca ', [marca,modelo])
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getCatalogo6  = async (req, res) => {
   
    try {
        const marca = req.query.marca;
        const modelo = req.query.modelo;
        const sub_marca = req.query.sub_marca;

        console.log("esta es la marca: " + marca)
        console.log("esta es la modelo: " + modelo)
        console.log("esta es la sub: " + sub_marca)

    const [rows] = await pool.query('SELECT descripcionG FROM CatalogoH where marca = ? AND modelo = ? AND sub_marca = ?', [marca,modelo,sub_marca])
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const getCatalogo7  = async (req, res) => {
   
    try {
        const marca = req.query.marca;
        const modelo = req.query.modelo;
        const sub_marca = req.query.sub_marca;
        const descripcionG = req.query.descripcionG;

        console.log("esta es la marca: " + marca)
        console.log("esta es la modelo: " + modelo)
        console.log("esta es la sub: " + sub_marca)
        console.log("esta es la descripcion: " + descripcionG)
        
    const [rows] = await pool.query('SELECT * FROM CatalogoH where marca = ? AND modelo = ? AND sub_marca = ? AND descripcionG = ?', [marca,modelo,sub_marca,descripcionG])
            res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal aca toy'
        })
    }
}

export const deleteEmpleados = async (req, res) => {
    try {
    const [result] = await pool.query('DELETE FROM usuariosiva WHERE id_usuario = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
}


export const putEmpleados = async(req, res) => {
    const {id} = req.params
    //const {nombreContacto} = req.body

    try {    
    const [result] = await pool.query('UPDATE nempresa SET Autorizada = 1 WHERE id = ?', [id])
    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM nempresa WHERE id = ?',[id])
    
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    }
}

export const inicioSession  = async (req, res) => {
    const {correo, contrasenia} = req.body
    try {
    const [rows] = await pool.query('SELECT * FROM Alta_Colaboradores WHERE Correo = ?', [correo])
    if (rows.length <= 0) return res.status(200).json({
        message: 'Usuario no encontrado'
    })
    
    console.log(rows[0]['Correo'])
    console.log(rows[0]['Contrasenia']) //Si da el correo
    const mail = (rows[0]['Correo'])
    const pass = (rows[0]['Contrasenia'])

    if(mail === correo && pass === contrasenia){
       
        res.status(210).json(rows)
            //console.log(rows)
        
    }else{ 
        return res.status(200).json({
            message: 'Error de credenciales'
        })   
    }
    } catch (error) {
        return res.status(500).json({
            message: ' Algo esta mal'
        })
    } 
}

export const TotalMarcas = async(req,res) =>{
    try {
    
        const [rows] = await pool.query('SELECT  marca, COUNT(*) Cantidad FROM CatalogoH GROUP BY marca;')
            res.json(rows)
        

        } catch (error) {
            return res.status(500).json({
                message: 'Conexion Erronea'
            })
        }
        
}