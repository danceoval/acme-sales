var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../db').models;
var Region = models.Region;
var SalesPerson = models.SalesPerson;
var SalesPersonRegion = models.SalesPersonRegion;

module.exports = router;

router.get('/', function(req, res, next){
  //what do we need here??
  //regions.. with the salesPeople
  //plus all salesPeople
 
});

router.post('/', function(req, res, next){
  //Create Region by zip and redirect

});
