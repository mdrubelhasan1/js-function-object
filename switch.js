const color ='purple';
if(color === 'green'){
    console.log('you are my green friend');
}
else if(color === 'red'){
    console.log('you are my red friend');
}
else if(color === 'yellow'){
    console.log('you are my yellow friend');
}
else if(color === 'white'){
    console.log('you are my white friend');
}
else {
    console.log('you are my black black friend');
}
// switch:

switch(color) {
    case 'green':
        console.log('you are my green friend');
        break; 
    case 'red':
        console.log('you are my red friend');
        break; 
    case 'blue':
        console.log('you are my blue friend');
        break; 
    case 'white':
        console.log('you are my white friend');
        break; 
    case 'yellow':
        console.log('you are my yellow friend');
        break; 
    default:
        console.log('you are my best friend');
    }
