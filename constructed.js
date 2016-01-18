require('./index.js');

function Building() {this.isBurned = false};

Building.prototype.burn = function() {
  console.log('🔥');
  this.isBurned = true;
};

module.export = new Building();
