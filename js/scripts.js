var temp = prompt("What is the temperature you want converted?");

var units = prompt("Units? C/F?");

function convert(t, u) {
  var temp = parseInt(t);
  var unit = u;
  var firstLet = unit.charAt(0).toLowerCase();
  var newTemp;

  if (firstLet === "c") {
    newTemp = (temp * 1.8) + 32;
    return newTemp;
  } else if (firstLet === "f") {
    newTemp = (temp-32)/1.8;
    return newTemp;
  }
  else {
    var warning = "Invalid units"
    return warning;
  }
}

alert(convert(temp, units));
