const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/usuario/registry')

const Usuarios = express.Router()

//CRUDS Usuario
Usuarios.post('/',authRegistry.authorization,registry.create)

Usuarios.get('/',authRegistry.authorization ,registry.read_all)

Usuarios.get('/:id',authRegistry.authorization ,registry.read)

Usuarios.patch('/:id',authRegistry.authorization,registry.update)

Usuarios.delete('/:id',authRegistry.authorization,registry.delete)

module.exports = Usuarios