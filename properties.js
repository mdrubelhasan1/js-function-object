var shoppingCart ={
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 5,
    pen: 25
}
console.log(shoppingCart);
// get specific value of the property:
var penCount = shoppingCart.pen;
console.log(penCount);
var propertyName = "mouse"
var propertyValues =shoppingCart[propertyName];
console.log(propertyName,propertyValues);

// update specific property value of an object.
shoppingCart.keyboard= 11;
console.log(shoppingCart);
console.log(shoppingCart.keyboard);
// print property name of an object:
var properties = Object.keys(shoppingCart);
console.log(properties);

// set property value:
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 12;
console.log(shoppingCart);
shoppingCart[propertyName] = 50;
console.log(shoppingCart);