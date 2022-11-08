import { Router } from 'express'
import { crearProducto, listaProductos } from '../controllers/productos.controllers'

//instanciar el router
const router = Router()

router.route('/productos').get(listaProductos).post(crearProducto);

export default router
