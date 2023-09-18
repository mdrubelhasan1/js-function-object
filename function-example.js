// function functionName(parameters){
//     function body
//     return;
// }
// var returnVlue = functionName(parameters);
// console.log(returnVlue);

function getAvarage(assaignment1, assaignment2,assaignment3){
    const total = assaignment1 + assaignment2 + assaignment3;
    const avarage = total /3;
    return avarage;
}
const assaignment1Marks = 50;
const assaignment2Marks = 60;
const assaignment3Marks = 50;
var myAvarage = getAvarage(assaignment1Marks,assaignment2Marks,assaignment3Marks);

console.log( 'my avarage so far' ,myAvarage);