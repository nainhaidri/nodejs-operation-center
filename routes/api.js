const Router = require('express').Router();
const WholeSalerRoutes = require('./v1/wholesaler');

Router.use('/v1/wholesaler', WholeSalerRoutes);

module.exports = Router;