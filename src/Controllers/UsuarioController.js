const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {
    async create(req, res){
        const usuario = await UsuarioModel.create(req.body);

        return res.status(200).json(usuario);
    }

    async read(req, res){
        const usuarios = await UsuarioModel.find();

        return res.status(200).json(usuarios);
    }

    update(req, res){
        
    }

    delete(req, res){
        
    }



}

module.exports = new UsuarioController();