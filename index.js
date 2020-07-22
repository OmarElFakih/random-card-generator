window.onload = () =>{
    let cardSymbols = document.getElementsByClassName("card-type");
    let cardValue = document.querySelector("#card-value");

    let symbols = generateCardSymbol(Math.floor(Math.random() * 4));
    let value = generateCardValue(Math.floor(Math.random() * 13) + 1);

    for (sym of cardSymbols) {
      sym.innerHTML = symbols;     
    }

    cardValue.innerHTML = value;
    

}


function generateCardSymbol(aNumber) {
    console.log("card symbol called");
    switch(aNumber){
        case 0:
            return "&spades;";
        break;
        case 1:
            return "&clubs;";
        break; 
        case 2:
            return "&hearts;";
        break;
        case 3:
            return "&diams;";
        break;       
        default:
            return "";
        break;        
    }
}

function generateCardValue(aNumber) {
    console.log("card value called");
    switch(aNumber){
        case 1:
            return "A";
        break;
        case 11:
            return "J";
        break;
        case 12: 
            return "Q";
        break;
        case 13: 
            return "K";            
        break;
        default:
            return `${aNumber}`;
        break;    
    }
}