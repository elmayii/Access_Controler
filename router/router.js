const express= require("express");
const authRegistry = require('../controler/auth/registry')
const registry = require('../controler/casos_uso/registry')

const router = express.Router()

//Casos de Uso

//dar de alta a vehiculos
router.post('/Set',authRegistry.authorization,registry.dar_alta)
//darle salida
router.post('/Salida/:id',authRegistry.authorization,registry.Registrar_Salida)
//registrar entrada
router.post('/Entrada',authRegistry.authorization,registry.Registrar_Entrada)
//establecer comienzo de mes
router.get('/Mes',authRegistry.authorization,registry.comienza_mes)
//generar pago a residentes
router.get('/pago/:fileName',authRegistry.authorization,registry.pago_residentes)
//ver registro
router.get('/registro',authRegistry.authorization,registry.read_registro)

//Usuarios 
router.post(`/sing_up`, authRegistry.Sing_Up)
router.post('/loggin', authRegistry.Loggin)
router.post('/logout',authRegistry.authorization, authRegistry.Logout)


module.exports= router