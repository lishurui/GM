var list = require('./list.json')
var carthot=require('./cart.json')
var home=require('./home.json')
module.exports = function() {
  return {
    'list.php': list,
    'cart.php':carthot,
    'home.php':home
  }
}
