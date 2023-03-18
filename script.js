function mainCalc(operator){
    var num_value1 = parseFloat(document.getElementById("numberValue1").value);
    var num_value2 = parseFloat(document.getElementById("numberValue2").value);
    var finalNum;
    switch(operator){
        case "sum":
            finalNum = num_value1+num_value2;
            break;
        case "subtraction":
            finalNum = num_value1-num_value2;
            break;
        case "product":
            finalNum = num_value1*num_value2;
            break;
        case "quotient":
            finalNum = num_value1/num_value2;
            break;
        case "mod":
            finalNum = num_value1%num_value2;
            break;
    }
    if(Number.isNaN(num_value1) || Number.isNaN(num_value2)){
        document.getElementById('results').innerHTML="There are no numbers in the calculator!";
    }else{
        document.getElementById('results').innerHTML="The "+operator+" of "+num_value1+" and "+num_value2+" is "+finalNum;
    }
}
