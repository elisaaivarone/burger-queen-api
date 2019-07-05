const router = require('express').Router();
const Orders = require('../controllers/orders')

router.get('/', Orders.getOrders);
router.get('/:id', Orders.getOrdersById);
router.post('/', Orders.postOrders);
router.put('/:id', Orders.putOrders);
router.delete('/:id', Orders.deleteOrders);

module.exports = router;