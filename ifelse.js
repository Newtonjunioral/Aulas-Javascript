//ifelse e switch case

let hora = 10;

if (hora >=  6 && hora <= 12) {
    console.log('bom dia'); 
}
else if (hora >  12 && hora <= 18) {
        console.log('boa tarde');
            }
else {
      console.log('bom noite');
}

hora = 20;

switch (hora) {
    case 10:
    console.log('bom dia'); 
    break;

    case 15:
    console.log('boa tarde'); 
    break;

    case 21:
    console.log('boa noite'); 
    break;

    default:
    console.log('5'); 
    break;
}