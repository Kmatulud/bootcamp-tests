function countAllFromTown(str, regNum){
  var emptyArr = [];
  var newStr = str.split(',');
  for (var i = 0; i < newStr.length; i++){
    var trim = newStr[i].trim();
    if (trim.startsWith(regNum)){
      emptyArr.push(trim[i]);
    }
  }
  return emptyArr.length
}