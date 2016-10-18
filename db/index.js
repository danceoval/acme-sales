var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/acme_sales', {
  logging: false
});

var SalesPerson = db.define('sales_person', {/**/});

var Region = db.define('region', {/**/});

var SalesPersonRegion = db.define('sales_person_region', {/**/});


//Relations


//Sync and truncate are methods used in testing
module.exports = {
  models: {
    SalesPerson: SalesPerson,
    Region: Region,
    SalesPersonRegion: SalesPersonRegion
  },
  sync: function(){
    return db.sync({force: true });
  },
  truncate: function(){
    //perhaps put some restrictions - only if CONN is test**
    return SalesPersonRegion.destroy({ where: {} })
      .then(function(){
        return Promise.all([
            SalesPerson.destroy( { where: {} }),
            Region.destroy( { where: {} })
        ]);
      })
  }
};
