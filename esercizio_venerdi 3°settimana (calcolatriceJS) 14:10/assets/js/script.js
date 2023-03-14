function scrivi(valore) {
    var calc = document.getElementById("inputCalcolo");
    calc.value += valore;
    }
    
    function calcola() {
    var calc = document.getElementById("inputCalcolo");
    calc.value = eval(calc.value);
    }
    
    function cancella() {
    var calc = document.getElementById("inputCalcolo");
    calc.value ="";
    }