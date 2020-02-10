function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    return this;
};

function Mouse(name) {
    this.nam = name;
}

var tom = new Cat();
var mickey = new Mouse();
tom.eat(mickey);
console.log(tom);