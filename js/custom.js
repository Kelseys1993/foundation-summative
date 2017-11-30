//custom js
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

(function(){ //iife starts ****



var count = 0;
var countEl = document.getElementById("count");
var add = document.getElementById('plus');
var sub = document.getElementById('minus');
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



})()//iife ends ******