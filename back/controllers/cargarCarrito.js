
const cargarCarrito = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems


cargarCarrito.getItemCart = async (req, res) => {
  try {
    const { id } = req.params;
    const funko = await Funkos.findOne({ where: { id }});

    return res.status(200).json(funko);

  } catch (error) {
    return res.status(500).send({message:error.message})
  }
};

cargarCarrito.addItemCart = async(req, res)=>{
    try {
        const { id } = req.params;
        const funko = await Funkos.findOne({ where: { id } });
        const add = await CartItems.create(funko)
      return  res.json(add)
        
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

cargarCarrito.deleteCart = async(req, res)=>{
    try {
      CartItems.destroy({force:true})
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
