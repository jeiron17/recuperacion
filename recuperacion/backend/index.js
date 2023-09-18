const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 9300

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'medicos',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

app.post('/usuarios/registro', (req, res) => {
    let { 
        Nom_usuario,Correo_electronico,Password_usu
    } = req.body

    const query = `INSERT INTO usuarios VALUES (NULL, '${Nom_usuario}','${Correo_electronico}','${Password_usu}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`usuario Agregada`)
    })
})



app.post('/usuarios/login', (req, res) => {
    let   { 
        Correo_electronico,Password_usu
    } = req.body

    const  query = `SELECT * FROM usuarios WHERE Correo_electronico='${Correo_electronico}' AND Password_usu='${Password_usu}';`

    conexion.query(query, (error,resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json('Bienvenido')
        } else {
            res.json(`No se encuentra`)
        }
    })
})

app.post('/doctores/registro', (req, res) => {
    let { 
        Nom1_doctor,Ape1_doctor,Tip_documento,Num_doc,Especialidad
    } = req.body

    const query = `INSERT INTO doctores VALUES (NULL, '${Nom1_doctor}','${Ape1_doctor}','${Tip_documento}','${Num_doc}','${Especialidad}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`usuario Agregada`)
    })
})

app.get('/doctores', (req, res) => {
    const query = `SELECT * FROM doctores`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/doctores/:id_doc', (req, res) => {
    const {id_doc} = req.params

    const query = `SELECT * FROM doctores WHERE id_doc='${id_doc}'`
    conexion.query(query, (error, resultado) =>{
        if(error) return console.error(error.message)
    })
})

app.post('/doctores/agregar', (req, res) => {
    const usuario = {
        Nom1_doctor: req.body.Primer_Nombre,
        Ape1_docto: req.body.Primer_Apellidor,
        Tip_documento: req.body.Tipo_Documento,
        Num_doc:  req.body.Num_Documento,
        Especialidad: req.body.Especialidades
    }

    const query = `INSERT INTO doctores SET ?`
    conexion.query(query, usuario, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se insertó correctamente el usuario`)
    })
})

app.put('/doctores/actualizar/:id_doc', (req, res) => {
    const { id_doc } = req.params
    const { Nom1_doctor,Ape1_doctor,docu_id_documento,Num_doc,Especialidad} = req.body

    const query = `UPDATE doctores SET id_doc='${id_doc}', Nom1_doctor='${Nom1_doctor}',Ape1_doctor='${Ape1_doctor}',docu_id_documento='${docu_id_documento}',Num_doc='${Num_doc}',Especialidad='${Especialidad}';`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el usuario`)
    })
})

app.delete('/doctores/borrar/:id_doc', (req, res) => {
    const {id_doc} = req.params
    const {Nom1_doctor,Ape1_doctor,docu_id_documento,Num_doc,Especialidad} = req.body

    const query = `DELETE FROM doctores WHERE id_doc=${id_doc};`
    conexion.query(query, (error, resultado) => {
        if(error) console.error(error.message)

        res.json(`Se eliminó correctamente el usuario`)
    })
})
