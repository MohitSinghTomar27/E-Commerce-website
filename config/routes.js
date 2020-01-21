const express = require('express')
const router = express.Router()

const {authenticateUser} = require('../app/middlewares/authentication')

const productsController = require('../app/controllers/productsController')
const usersController = require('../app/controllers/UsersController')
const categoriesController = require('../app/controllers/categoriesController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users',usersController.list)
router.delete('/users/logout', authenticateUser, usersController.logout)


router.get('/products', productsController.list)
router.get('/products/:id', productsController.show)
router.post('/products', productsController.create)
router.put('/products/:id', productsController.update)
router.delete('/products/:id', productsController.destroy)

router.get('/categories', categoriesController.list)
router.post('/categories',  categoriesController.create)



module.exports = router
