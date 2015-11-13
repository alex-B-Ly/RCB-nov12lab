stringCheckButton = document.getElementById('check-button');

function stringDetect(){
  var entry = 4;

  if(typeof entry === "string"){
    alert('Your variable: ' + entry + ', is a string');
  }else{
    alert('Your variable: ' + entry + ', is not a string');
  }
}

stringCheckButton.addEventListener('click', stringDetect);