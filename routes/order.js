const { Router } = require('express');
const orderController = require('../controllers/order.controllers');
const router = Router();

router.get('/order/:id',orderController.get_orders);
router.get('/order/',orderController.getOrders);
router.post('/order/:id',orderController.checkout);

module.exports = router;