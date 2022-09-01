/* const User = require("../models").User;
const Product = require("../models").Product;
const CartItem = require("../models").CartItem;
const Order = require("../models").Order;
 */

const CartItems = require("../models").CartItems;
//const OrderItems = require("../models").OrderItems;

const carrito = {};

//Agregar un producto al carrito
carrito.addItem = async (req, res) => {
  const {quantity, total, userId} = req.body
  console.log("REQ.BODY desde carrito.addItem",req.body);
  
  try {
    const carrito = await CartItems.create({quantity,total, userId})

    res.json(carrito)

  } catch (error) {
    return res.status(500).json({message:error.message});
  }

};

//eliminar un producto del carrito
carrito.deleteItem = async (req, res) => {
  const {id} = req.params
  try {
    const deleteCart = await CartItems.destroy({where:{id}})
    res.status(204).json(deleteCart)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
};

//editar la cantidad de productos de en un carrito
carrito.editItem = async (req, res) => {
  try {

  } catch (error) {
    return res.status(500).json({message:error.message});
  }
};

carrito.allItem = async(req, res) =>{
  try {
    const carritos = await CartItems.findAll();
    res.status(200).json(carritos)
  } catch (error) {
    return res.status(500).json({message:error.message});   
  }
}

module.exports = carrito;

