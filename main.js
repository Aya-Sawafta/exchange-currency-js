var exchangeForm = document.querySelector(".exchangeForm");
var exchangedCurrencyValue=``;
exchangeForm.onsubmit=function(e){
    
    e.preventDefault();
   var originalAmount= e.target.elements;
   if (originalAmount[1].value == "JOD"){
    exchangedCurrencyValue = (originalAmount[0].value * 5);
   } else if (originalAmount[1].value == "USD"){
    exchangedCurrencyValue = (originalAmount[0].value * 3.5);
   }
   else(
    exchangedCurrencyValue= originalAmount[0].value
   )
exchangedCurrency();
}

function exchangedCurrency(){
    var exchange=`exchanged Currency: `;
document.querySelector(".result").innerHTML= exchange+=`${exchangedCurrencyValue}`
}