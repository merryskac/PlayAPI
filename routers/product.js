import { addAProduct, getAllProducts, getAllProductsById } from '../controllers/product.controller.js'
import channelRouters from './channel.js'

channelRouters.get('/products', getAllProducts)

channelRouters.post('/products/:id', addAProduct)

channelRouters.get('/products/:id', getAllProductsById)
export default channelRouters