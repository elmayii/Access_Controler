const authRegistry = require('../controler/auth/registry')
const express= require("express");
const registry = require("../controler/vehiculo/registry");

const vehiculos = express.Router()

//CRUDS Vehiculo

//crear
vehiculos.post(`/`,authRegistry.authorization,registry.create)

vehiculos.get('/:id',authRegistry.authorization ,registry.read)

vehiculos.get('/',authRegistry.authorization,registry.read_all)
//actualizar por id
vehiculos.patch('/:id',authRegistry.authorization,registry.update)
//eliminar por id
vehiculos.delete('/:id',authRegistry.authorization,registry.delete)
//buscar por ID, en el registro, todas las estancias del vehiculo
vehiculos.get('/:id/registro',authRegistry.authorization,registry.read_registro)

module.exports = vehiculos