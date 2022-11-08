import { Router } from 'express'
import { crearProducto, listaProductos, ObtenerProductos } from '../controllers/productos.controllers'

//instanciar el router
const router = Router()

router.route('/productos').get(listaProductos).post(crearProducto);
router.route('/productos/:id').get(ObtenerProductos)

export default router
