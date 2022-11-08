import Producto from '../models/producto'

export const listaProductos = (req, res) => {
  res.send('hola desde el backend en la peticion get')
}

export const crearProducto = async (req, res) => {
  try {
    console.log(req.body)
    //validar los datos del objetos
    //guardar el objeto en la base de datos
    const productoNuevo = new Producto(req.body)
    //guarda ese objeto en la base de datos
    await productoNuevo.save()
    res.status(201).json({
      mensaje: 'El producto fue creado correctamente',
    })
  } catch (error) {
    console.log(error)
    req.status(404).json({
      mesaje: 'Error al intentar agregar un nuevo producto',
    })
  }
}
