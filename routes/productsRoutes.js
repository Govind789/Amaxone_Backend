const express =  require('express');

const prodcutsController = require('../controllers/prodcutsController.js');

const productRouter = express.Router();

productRouter.route('/')
            .get(prodcutsController.getAllProducts)
            .post(prodcutsController.addProduct);

productRouter.route('/:id')
            .put(prodcutsController.replaceProduct)
            .delete(prodcutsController.deleteProduct);

module.exports = productRouter;
