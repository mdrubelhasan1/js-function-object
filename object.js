var student ={id:2001, 
    name:'rubel', 
    class: 'Bsc'
}
var mobile ={
    brand:'samsung',
    price:19000,
    storage:'64gb',
    camera:'7mp'
}

var myComputer ={
    brand : 'toshiba',
    price : 48500,
    ram : '2gb',
    ssd: '1tb'
}
console.log(myComputer.brand);
// get specific property value of an object:
console.log(mobile.brand);
// change property value of an object:
myComputer.brand = 'lenovo';
console.log(myComputer);
console.log(myComputer.brand);
