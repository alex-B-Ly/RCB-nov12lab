// String Checker

var stringCheckButton = document.getElementById('check-button');

function stringDetect(){
  var entry = 4;

  if(typeof entry === "string"){
    alert('Your variable: ' + entry + ', is a string');
  }else{
    alert('Your variable: ' + entry + ', is not a string');
  }
}

stringCheckButton.addEventListener('click', stringDetect);

// Input Size Checker

var smallerInputButton = document.getElementById('smaller-input-button');

function sizeCompare(){
  var str1 = prompt('Enter a string');
  var str2 = prompt('Enter a second string');
  var str1Length = str1.length;
  var str2Length = str2.length;

  if(str1Length === str2Length){
    alert('Both strings are of equal length');
  }else if(str1Length > str2Length){
    alert('Your first string: "' + str1 + '", is longer than your second string');
  }else if(str2Length > str1Length){
    alert('Your second string: "' + str2 + '", is longer than your first string');
  }
}

smallerInputButton.addEventListener('click', sizeCompare);