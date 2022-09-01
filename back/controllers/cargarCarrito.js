const { sequelize } = require("../models");

const cargarCarrito = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems


cargarCarrito.getItemCart = async (req, res) => {
  try {
    const  id  = req.params.id;
    const funko = await Funkos.findOne({ where: { id }});

    return res.status(200).json(funko);

  } catch (error) {
    return res.status(500).send({message:error.message})
  }
};

cargarCarrito.addItemCart = async (req,res)=> {
     try{
      
      const addItem = await OrderItems.create({funko:{frontData:req.body,frontID:req.params.id}})
      res.json(addItem)
    }

      catch(error){
        return res.status(500).send({message:error.message})

      }


}



cargarCarrito.deleteCart = async(req, res)=>{
    try {
    }
    catch(error){

      return res.status(500).send({message:error.message})

    }

cargarCarrito.addItemOrder = async(req,res)=>{
  
  try{
    //fijarme que manda el front y meter eso en el create

    OrderItems.create()
  }
  catch{

  }
}
}





module.exports = cargarCarrito;
