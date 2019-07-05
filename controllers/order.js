const models = require('../models');
const Order = models.Order;
const OrderProducts = models.OrderProducts;
const Products = models.Products;
const User = models.User;

const getOrders = (req, res) => Order.findAll({
    include: [{ model: OrderProducts, include: [Products] }, User]
})
    .then(order => res.send(order));

const getOrdersById = (req, res) => Order.findByPk(req.params.id, {
    include: [{ model: OrderProducts, include: [Products] }, User]
})
    .then(order => {
        order ? res.send(order) : res.sendStatus(404)
    });

const postOrders = (req, res) => Order.create(req.body, { include: [OrderProducts] })
    .then(order => {
        res.status(201).send(order);
    })

const putOrders = (req, res) => Order.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
        Order
            .findByPk(req.params.id)
            .then(order => res.send(order))
    });

const deleteOrders = (req, res) => Order.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
}
