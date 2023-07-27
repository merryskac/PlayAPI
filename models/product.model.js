import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  link_product:{
    require: true,
    type: String
  },
  title:{
    require: true,
    type: String
  },
  price:{
    require: true,
    type: Number
  },
  videoID:{
    require: true,
    type: String
  }
})

const Product = mongoose.model('Product', productSchema)

export async function getAllProducts(){
  return await Product.find()
}

export async function addProducts(linkProduct,name, price, videoID){
  const addProduct = new Product({
    link_product: linkProduct,
    title: name,
    price: price,
    videoID: videoID
  })
  const add =await addProduct.save()
  return add
}

export async function getAllProductsById(id){
  return Product.find({videoID: id})
}