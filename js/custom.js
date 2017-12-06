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
var trigger = document.getElementsByClassName('modal-trigger');
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
init();
console.dir(vehicle1);


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
btn[3].addEventListener('click', distances, false);
btn[3].addEventListener('click', distances2, false);
btn[3].addEventListener('click', distances3, false);
btn[3].addEventListener('click', distances4, false);
btn[3].addEventListener('click', showCar, false);
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
carHire();
}
function showCar(){
  if(radioValues3[0] === 2 && radioValues4[0] <= 10){
    vehicle1.style.display = 'none';
    vehicle3.style.left = '68%';
    vehicle2.style.left = '35%';
    vehicle4.style.display = 'block';
    vehicle4.style.left = '2%';
  } else if ((radioValues3[0] > 2 && radioValues3[0] < 5) &&  radioValues4[0] <= 10) {
    vehicle1.style.display = 'none';
    vehicle2.style.display = 'block';
    vehicle4.style.display = 'block';
    vehicle3.style.left = '18%';
    vehicle4.style.left = '52%';
  } else if (radioValues3[0] > 5  && radioValues4[0] <= 15)  {
    vehicle1.style.display = 'none';
    vehicle2.style.display = 'none';
    vehicle3.style.display = 'none';
    vehicle4.style.display = 'block';
    vehicle4.style.left = '36%';
  }
}
function carHire(){
 console.log( valu[0] * radioValues4);

}

 // console.log(dataArray2[2].waitomo * dataArray[0].fuel);

// console.log(dataArray2[0].waitomo * 3)

  
  

})();//iife ends ******