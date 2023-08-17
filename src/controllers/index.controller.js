import {pool} from '../db.js'

export const ping = async (req, res) => {
    console.log("PAto")

    const [result] = await pool.query('SELECT "pong" as result')
    
     res.json(result[0])
 }