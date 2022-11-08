import Producto from '../models/producto'

export const listaProductos = async (req, res) => {
  try {
    //buscar los productos
    const productos = await Producto.find()
    //responder al frontend con el arreglo de productos
    res.status(200).json(productos)
  } catch (error) {
    console.log(error)
    //enviar una respuesta al frontend
    res.status(404).json({
      mensaje: 'Error al buscar el producto',
    })
  }
}

export const ObtenerProductos = async (req, res) => {
    try {
      //obtener el parametro
      console.log(req.params.id)
      //buscar en la base de datos el producto que coincide con el parametro
      const productoBuscado = await Producto.findById(req.params.id)
      //responder al frontend
      res.status(200).json(productoBuscado)
    } catch (error) {
      console.log(error)
      //enviar una respuesta al frontend
      res.status(404).json({
        mensaje: 'Error al buscar el producto',
      })
    }
  }

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body)
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

export const editarProducto = async (req, res)=>{
    try {
        //obtener el parametro (req.params.id)
        //obtenere los datos del body validados (req.body)
        //actualizar el producto en mi base de datos
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:'El producto fue editado correctamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'Erroral intentar editar un producto'
        })
    }
}