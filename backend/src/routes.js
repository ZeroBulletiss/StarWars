const { Router } = require('express')
const FormController = require('./controller/FormController')

const routes = Router()

routes.post('/', FormController.post)
routes.get('/', FormController.get)
routes.delete('/:id', FormController.delete)

module.exports = routes