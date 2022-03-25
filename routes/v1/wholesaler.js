const Router = require('express').Router();
const WholesalerController = require('../../controllers/v1/wholesalerController');

Router.get('/', WholesalerController.getWholesalers);

module.exports = Router;