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
var next = document.getElementById('firstBtn');
var prev1 = document.getElementById('prevOne');
prev1.addEventListener('click', prevDiv, false);
next.addEventListener('click', nextDiv, false);
sub.addEventListener('click', minus, false);
add.addEventListener('click', plus, false);

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
$('#formOne').fadeOut(800,function(){
  $('#formTwo').fadeIn(800);
});
}else{
 
}
}
function prevDiv(){
  $('#formTwo').fadeOut(800,function(){
  $('#formOne').fadeIn(800);
});
}
console.dir(next)
console.log($('#demo-form').val);


})()//iife ends ******