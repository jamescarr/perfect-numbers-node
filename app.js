var kiwi= require('kiwi')
kiwi.require('express');
require('express/plugins')

var perfectNumbers = require(__dirname + '/lib/perfect-number')

configure(function(){
  use(MethodOverride);
  use(ContentLength);
  use(Logger);
  set('root', __dirname);
})


get('/', function(){
  this.render('perfect_numbers.html.haml', {
    locals:{
      numbers: perfectNumbers.findInRange(1,10000)
    }
  });
});

run()
