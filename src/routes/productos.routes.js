import { Router } from 'express'
import { borrrarProducto, crearProducto, editarProducto, listaProductos, ObtenerProductos } from '../controllers/productos.controllers'

//instanciar el router
const router = Router()

router.route('/productos').get(listaProductos).post(crearProducto);
router.route('/productos/:id').get(ObtenerProductos).put(editarProducto).delete(borrrarProducto)

export default router
