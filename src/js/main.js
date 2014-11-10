var People = function(name) {
  this.name = name;
};

People.prototype.getName = function() {
  return this.name;
}

var p = new People('xjp');
console.log(p.getName());
console.log('balbla');