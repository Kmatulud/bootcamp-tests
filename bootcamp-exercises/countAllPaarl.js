function countAllPaarl(str){
  var newStr = str.split(', ');
  var emptyArr = [];
  for (var i = 0; i < newStr.length; i++){
    if (newStr[i].startsWith('CJ')){
      emptyArr.push(newStr[i]);
    }
  }
  return emptyArr.length;
}