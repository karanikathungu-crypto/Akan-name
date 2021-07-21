function akanName(){
// const form = document.getElementsByClassName('dos');
  const userForm = document.querySelector('#dos');
  const myDate = document.querySelector('#date');
// const myGender = document.querySelector('#gender');
// const btn = document.querySelector('.buttonn');
  userForm.addEventListener('submit', onSubmit);
  function onSubmit(e) {
   e.preventDefault();
   alert('Thanks for clicking!');
  }
  let dD = parseInt(document.getElementById('day').value);
  let mM = parseInt(document.getElementById('month').value);
  let cC = parseInt(document.getElementById('century').value);
  let yY = parseInt(document.getElementById('year').value);
  let genderInput = document.getElementById('gender').value;

  function getDay(dD, mM, cC, yY){
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )mod 7;

  }
  let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  var userDay = function(getDay());

  if(genderInput=== male){
    if(userDay===0){
      console.log("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay===1){
      console.log("Your Akan name is:" +maleNames[userDay]);
   } 
    else if(userDay===2){
      console.log("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay===3){
      console.log("Your Akan name is:" +maleNames[userDay]);
   }
    else if(userDay===4){
      console.log("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay===5){
      console.log("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay===6){
      console.log("Your Akan name is:" +maleNames[userDay]);
    }
    else{
      console.log("Kindly enter your details in correct format");
    }
  }
  if(genderInput=== female){

    if(userDay===0){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===1){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===2){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===3){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===4){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===5){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay===6){
      console.log("Your Akan name is:" +femaleNames[userDay]);
    }
    else{
      console.log("Kindly enter your details in required format");
    }
  }
}