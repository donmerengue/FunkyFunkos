const { sequelize } = require("../models");

const confirCompra = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems


confirCompra.vaciarCarrito = async (req,res) => {
  try{
  const destroy =  await CartItems.destroy()
  res.json(destroy)
  }
  catch(error){console.log(error)}

}

confirCompra.cargarOrderItems = async  (req,res)=>{
try{
    const data = await CartItems.findAll()
    data.map((item)=>{OrderItems.create({item})})   
}
catch(err){
    console.log(err)
}
}

module.exports = confirCompra