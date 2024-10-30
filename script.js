document.getElementById("convert").onclick = function convert() {
    var UnitFrom = document.getElementById("UnitFrom").value;
    var ToUnit = document.getElementById("UnitTo").value;
    var Temperature = parseFloat(document.getElementById("Temperature").value); 
    var convertedValue;
    var convertedUnit;

    switch(UnitFrom) {
        case "C":
           if (ToUnit === "F") {
              convertedValue = (Temperature * 9/5) + 32;
              convertedUnit = "F";
           } else {
              convertedValue = Temperature;
              convertedUnit = "C";
           }
           break;

        case "F":
           if (ToUnit === "C") {
              convertedValue = (Temperature - 32) * 5/9;
              convertedUnit = "C";
           } else {
              convertedValue = Temperature;
              convertedUnit = "F";
           }
           break;
    }
    document.getElementById("resault").value = convertedValue.toFixed(2) + " " + convertedUnit;
}

