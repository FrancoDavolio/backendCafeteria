import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import productoRouter from './routes/productos.routes'
//llamar a la conexion a la db
import './database'

//crear una instancia de express
const app = express()
//configurar un puerto
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log('Estoy en el puerto ' + app.get('port'))
})

//middlewares: son funsiones que se ejecutan antas de llegar a las rutas
app.use(cors()) //permite peticiones remotas
//permite recibir y usar formatos json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//informacion extra
app.use(morgan('dev'))
//cargar un archivo estactico
app.use(express.static(path.join(__dirname, '../public')))
console.log(path.join(__dirname, '../public'))
//rutas
//http://localhost:4000/apicafe/prueba
app.use('/apicafe',productoRouter)

