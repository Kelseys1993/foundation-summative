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
var trigger1 = document.getElementById('trigger1')
var trigger2 = document.getElementById('trigger2');
var trigger3 = document.getElementById('trigger3');
var trigger4 = document.getElementById('trigger4');
var vehicle1 = document.getElementById('vehicleOne');
var vehicle2 = document.getElementById('vehicleTwo');
var vehicle3 = document.getElementById('vehicleThree');
var vehicle4 = document.getElementById('vehicleFour');
var rdValue; 
var radioValues = [];
var radioValues2 =[];
var radioValues3 = [];
var radioValues4 = [];
var valu = [];
var fuelCost = [];
var hireCost = [];
sub.addEventListener('click', minus, false);
add.addEventListener('click', plus, false);
close.addEventListener('click', startAgain, false);
home.addEventListener('click', startAgain, false);
btn[2].addEventListener('click', prevDiv, false);
btn[0].addEventListener('click', nextDiv, false);
btn[4].addEventListener('click', prevDiv2, false);
btn[1].addEventListener('click', nextDiv2, false);
btn[5].addEventListener('click', prevDiv3, false);
btn[3].addEventListener('click', nextDiv3, false);
btn[3].addEventListener('click', init, false);
trigger1.addEventListener('click', modalImage1, false);
trigger2.addEventListener('click', modalImage2, false);
trigger3.addEventListener('click', modalImage3, false);
trigger4.addEventListener('click', modalImage4, false);



function init(){ 
getRadioValue();
getRadioValue2();
getRadioValue3();
distances();
distances3();
distances4();
showCar1();
showCar2();
showCar3();
showCar4();

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
radioValues.pop();
valu.pop();


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
radioValues2.pop();

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
radioValues3.pop();
radioValues4.pop();

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
      console.log(radioValues);
    } else if( rdValue == 'Wellington'){
       radioValues.push(rdValue);
      console.log(radioValues);
    } else if ( rdValue == 'New Plymouth'){
       radioValues.push(rdValue);
    console.log(radioValues);
    } else if ( rdValue == 'Napier'){
       radioValues.push(rdValue);
    console.log(radioValues);
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
      radioValues2.push(rdValue);
      console.log(radioValues2);
    } else if( rdValue == 'taupo'){
       radioValues2.push(rdValue);
      console.log(radioValues2);
    } else if ( rdValue == 'rotorua'){
       radioValues2.push(rdValue);
    console.log(radioValues2);
    } else if ( rdValue == 'matamata'){
       radioValues2.push(rdValue);
    console.log(radioValues2);
    } else if ( rdValue == 'tauranga'){
       radioValues2.push(rdValue);
    console.log(radioValues2);
    }else if ( rdValue == 'castlepoint'){
       radioValues2.push(rdValue);
    console.log(radioValues2);
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
    if (rdValue == '1') {
    radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    } else if( rdValue == '2'){
     radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    } else if ( rdValue == '3'){
     radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    } else if ( rdValue == '4'){
     radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    } else if ( rdValue == '5'){
     radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    }else if ( rdValue == '6'){
     radioValues3.push(parseInt(rdValue));
    console.log(radioValues3);
    } else {
    console.log('break');
    }
    if (countEl.value > 0){
    radioValues4.push( parseInt(countEl.value));
    console.log(radioValues4);
    }else{
    console.log('break');
    }
}

//gets the distances from auckalnd to the seconds location
// and puts it into array valu
function distances(){
    if(radioValues[0] === 'Auckland' && radioValues2[0] === 'waitomo') {
     valu.push(dataArray2[0].waitomo);
    console.log(valu);
    } else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[0].rotorua);
    console.log(valu);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[0].tauranga);
    console.log(valu);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[0].taupo);
    console.log(valu);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[0].matamata);
    console.log(valu);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[0].castlepoint);
    console.log(valu);
    }

}

//gets the distances from wellington to the seconds location
// and puts it into array valu
function distances2(){
    if(radioValues[0] === 'Wellington' && radioValues2[0] === 'waitomo') {
     valu.push(dataArray2[1].waitomo);
    console.log(valu);
    } else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[1].rotorua);
    console.log(valu);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[1].tauranga);
    console.log(valu);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[1].taupo);
    console.log(valu);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[1].matamata);
    console.log(valu);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[1].castlepoint);
    console.log(valu);
    }

}

//gets the distances from new plymouth to the seconds location
// and puts it into array valu
 function distances3(){
    if(radioValues[0] === 'New Plymouth' && radioValues2[0] === 'waitomo') {
     valu.push(dataArray2[2].waitomo);
    console.log(valu);
    } else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[2].rotorua);
    console.log(valu);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[2].tauranga);
    console.log(valu);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[2].taupo);
    console.log(valu);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[2].matamata);
    console.log(valu);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[2].castlepoint);
    console.log(valu);
    }

}

//gets the distances from naiper to the seconds location
// and puts it into array valu
 function distances4(){
    if(radioValues[0] === 'Naiper' && radioValues2[0] === 'waitomo') {
     valu.push(dataArray2[3].waitomo);
    console.log(valu);
    } else if( radioValues[0] === 'Napier' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[3].rotorua);
    console.log(valu);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[3].tauranga);
    console.log(valu);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[3].taupo);
    console.log(valu);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[3].matamata);
    console.log(valu);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[3].castlepoint);
    console.log(valu);

    }

}
function showCar1(){
  if( radioValues3[0] === 1 && (radioValues4[0] >= 1 && radioValues4[0] <= 5)){
   vehicle1.style.display = 'block'; 
 
  } else{
    vehicle1.style.display = 'none';
  }
}
function showCar2(){
   if((radioValues3[0] >= 1 && radioValues3[0]  <= 2) && (radioValues4[0] >= 1 && radioValues4[0] <= 10)){
      vehicle2.style.display = 'block'; 
    
   }else{
    vehicle2.style.display = 'none';
  }
}
function showCar3(){
   if((radioValues3[0] >= 1 && radioValues3[0]  <= 5) && (radioValues4[0] >= 3 && radioValues4[0] <= 10)){
      vehicle3.style.display = 'block'; 
    
   }else{
    vehicle3.style.display = 'none';
  }
}
function showCar4(){
   if((radioValues3[0] >= 2 && radioValues3[0]  <= 6) &&  (radioValues4[0] >= 2 && radioValues4[0]  <= 15)){
      vehicle4.style.display = 'block'; 
   }else{
    vehicle4.style.display = 'none';
  }
}
function modalImage1(){
 $('#modalimage1').show();
 $('#heading1').show();
 $('#modalimage2').hide();
 $('#heading2').hide();
 $('#heading3').hide();
 $('#modalimage3').hide();
 $('#heading4').hide();
 $('#modalimage4').hide();
console.log(valu[0] / 100 * dataArray[0].fuel * 2.10) ;
console.log(radioValues4[0] * dataArray[0].hire);
}

function modalImage2(){
 $('#modalimage1').hide();
 $('#heading1').hide();
 $('#modalimage3').hide();
 $('#modalimage4').hide();
 $('#heading3').hide();
 $('#heading4').hide();
 $('#modalimage2').show();
 $('#heading2').show();
 $( "<div><p></p></div>" ).appendTo( "#rental" )
 fuelCost.push(valu[0] / 100 * dataArray[1].fuel * 2.10)
 hireCost.push(radioValues4[0] * dataArray[1].hire)
 console.log(fuelCost) ;
console.log(hireCost);
$('#fuel').append('<p> $: </p>' + fuelCost);
}

function modalImage3(){
  $('#modalimage1').hide();
  $('#heading1').hide();
  $('#modalimage2').hide();
  $('#heading2').hide();
  $('#modalimage4').hide();
  $('#heading4').hide();
  $('#modalimage3').show();
  $('#heading3').show();
console.log(valu[0] / 100 * dataArray[2].fuel * 2.10) ;
console.log(radioValues4[0] * dataArray[2].hire);
}

function modalImage4(){
  $('#modalimage1').hide();
  $('#heading1').hide();
  $('#modalimage2').hide();
  $('#heading2').hide();
  $('#modalimage3').hide();
  $('#heading3').hide();
  $('#modalimage4').show();
  $('#heading4').show();
  console.log(valu[0] / 100 * dataArray[3].fuel * 2.10) ;
console.log(radioValues4[0] * dataArray[3].hire);
}


})();//iife ends ******