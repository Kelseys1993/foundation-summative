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
var home = document.getElementById('logo');
var rdValue; 
var radioValues = [];
var valu = [];
init();

function init(){ 
btn[2].addEventListener('click', prevDiv, false);
btn[0].addEventListener('click', nextDiv, false);
btn[4].addEventListener('click', prevDiv2, false);
btn[1].addEventListener('click', nextDiv2, false);
btn[5].addEventListener('click', prevDiv3, false);
btn[3].addEventListener('click', nextDiv3, false);
btn[3].addEventListener('click',  getRadioValue, false );
btn[3].addEventListener('click',  getRadioValue2, false );
btn[3].addEventListener('click',  getRadioValue3, false );
sub.addEventListener('click', minus, false);
add.addEventListener('click', plus, false);
close.addEventListener('click', startAgain, false);
home.addEventListener('click', startAgain, false);
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
console.log(dataArray);
console.log(dataArray2);

     function getRadioValue() {
            // group1 radio values
            var radios = theForm.elements['group1'];
            
            for (var i=0; i<radios.length; i++) {
                var someRadio = radios[i];
                if (someRadio.checked) {
                    rdValue = someRadio.value;
                    break;
                }
                else rdValue = 'noRadioChecked';
            }
            if (rdValue == 'Auckland') {
              radioValues.push(rdValue);
              console.log(radioValues)
            } else if( rdValue == 'Wellington'){
               radioValues.push(rdValue);
              console.log(radioValues)
            } else if ( rdValue == 'New Plymouth'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else if ( rdValue == 'Napier'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else {
              console.log('break');
            }
          }
    function getRadioValue2() {
            // group2 radio values
            var radios = theForm.elements['group2'];
           
            for (var i=0; i<radios.length; i++) {
                var someRadio = radios[i];
                if (someRadio.checked) {
                    rdValue = someRadio.value;
                    break;
                }
                else rdValue = 'noRadioChecked';
            }
            if (rdValue == 'waitomo') {
              radioValues.push(rdValue);
              console.log(radioValues)
            } else if( rdValue == 'taupo'){
               radioValues.push(rdValue);
              console.log(radioValues)
            } else if ( rdValue == 'rotorua'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else if ( rdValue == 'matamata'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else if ( rdValue == 'tauranga'){
               radioValues.push(rdValue);
            console.log(radioValues)
            }else if ( rdValue == 'castlepoint'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else {
              console.log('break');
            }
          }


          function getRadioValue3() {
            //group3 radio values
            var radios = theForm.elements['group3'];
          
            for (var i=0; i<radios.length; i++) {
                var someRadio = radios[i];
                if (someRadio.checked) {
                    rdValue = someRadio.value;
                    break;
                }
                else rdValue = 'noRadioChecked';
            }
            if (rdValue == 'one') {
              radioValues.push(rdValue);
              console.log(radioValues)
            } else if( rdValue == 'two'){
               radioValues.push(rdValue);
              console.log(radioValues)
            } else if ( rdValue == 'three'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else if ( rdValue == 'four'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else if ( rdValue == 'five'){
               radioValues.push(rdValue);
            console.log(radioValues)
            }else if ( rdValue == 'six'){
               radioValues.push(rdValue);
            console.log(radioValues)
            } else {
              console.log('break');
            }
            if (countEl.value > 0){
          radioValues.push(countEl.value);
        }else{
          console.log('break')
        }
        }

          function blah(){
            if(radioValues[0] === 'Wellington' 
              && radioValues[1] === 'waitomo') {
             valu.push('hello');
          console.log(valu);

            }
         
          }
    
 console.log(dataArray2[2].waitomo * dataArray[0].fuel);

// console.log(dataArray2[0].waitomo * 3)

  
  

})()//iife ends ******