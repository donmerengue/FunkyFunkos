const User = require("../models").User
const jwt = require('jsonwebtoken');
//Este middleware sirve para proteger las rutas que son solo para el usuario autorizado

const requireAuth = (req, res, next) => {


    const token = req.cookies.token;
    

    if (token) { // Se fija si existe el web token y lo verifica
        jwt.verify(token, "FUNKO" , (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken)
                next();
            }
        })
    }
    else {
        res.redirect('/login');
     }
}
//Verificar usuario actual
const checkUser = (req, res, next) => {
    const token = req.cookies.token;
    
    if (token) {
        jwt.verify(token, "FUNKO" , async (err, decodedToken) => {
            
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findOne({where:{id:decodedToken.id}});//fijarme que me tira el decodedToken.id
                res.locals.user = user;
                next();
            }
        })
    }
    else{
    res.locals.user = null;
    }
    }



module.exports={requireAuth,checkUser}