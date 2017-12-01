//custom js
(function(){ //iife starts ****

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

var count = 0;
var countEl = document.getElementById("count");
var add = document.getElementById('plus');
var sub = document.getElementById('minus');
var btn = document.getElementsByClassName('btn-large');
var close = document.getElementById('modal-button2');
init();

function init(){ 
btn[2].addEventListener('click', prevDiv, false);
btn[0].addEventListener('click', nextDiv, false);
btn[4].addEventListener('click', prevDiv2, false);
btn[1].addEventListener('click', nextDiv2, false);
btn[5].addEventListener('click', prevDiv3, false);
btn[3].addEventListener('click', nextDiv3, false);
sub.addEventListener('click', minus, false);
add.addEventListener('click', plus, false);
close.addEventListener('click', startAgain, false);
}
function plus(){
   if (count < 15) {
    count++;
    countEl.value = count;
  }
}
function minus(){
  if (count > 0) {
    count--;
    countEl.value = count;
  }  
}
function nextDiv(){
  if($('input:radio:checked').length > 0){
document.getElementById('formOne').style.display = 'none';
document.getElementById('formTwo').style.display = 'block';
}
}
function prevDiv(){
document.getElementById('formTwo').style.display = 'none';
document.getElementById('formOne').style.display = 'block';

}
function nextDiv2(){
  if($('input:radio:checked').length > 1){
document.getElementById('formTwo').style.display = 'none';
document.getElementById('formThree').style.display = 'block';
}
}
function prevDiv2(){
document.getElementById('formThree').style.display = 'none';
document.getElementById('formTwo').style.display = 'block';

}
function nextDiv3(){
  if($('.radios').is(':checked') && $('#count').val().length > 0){
document.getElementById('formThree').style.display = 'none';
document.getElementById('formFour').style.display = 'block';
}
}
function prevDiv3(){
document.getElementById('formFour').style.display = 'none';
document.getElementById('formThree').style.display = 'block';

}

function startAgain(){
  setTimeout(function(){
  window.location.reload();
},500);

}



})()//iife ends ******