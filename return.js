function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // consule.log(sum);
    return sum;
}

// add(45,15);
var total = add(10,20);
console.log('total', total);

function bringSingara(money){
    var singaraPrice = 10;
    var quentity = money / singaraPrice;
    return quentity;

}
var singaras = bringSingara(200);
console.log('eating singsrs', singaras);