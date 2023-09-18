var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoe: 2,
  
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);
console.log(shoppingCart);

for(i = 0; i< keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName,propertyValues);
}
// For in Loop:
for(propertyName in shoppingCart){
   const value = shoppingCart[propertyName];
   console.log(propertyName,value);
}
