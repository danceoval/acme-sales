var router = require('express').Router();
var models = require('../db').models;
var Promise = require('bluebird');
var SalesPerson = models.SalesPerson;
var Region = models.Region;
var SalesPersonRegion = models.SalesPersonRegion;

module.exports = router;

router.get('/', function(req, res, next){

});

router.post('/', function(req, res, next){

});
