  const userForm = document.querySelector('#dos');
  userForm.addEventListener('submit', onSubmit);
  function onSubmit(e) {
   e.preventDefault();
   alert('Thanks for clicking!');
  let dD = parseInt(document.getElementById('day').value);
  let mM = parseInt(document.getElementById('month').value);
  let cC = parseInt(document.getElementById('century').value);
  let yY = parseInt(document.getElementById('year').value);
  let genderInput = document.getElementById('gender').value;

  function getDay(dD, mM, cC, yY){
    return Math.ceil( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD )%7;

  }
  let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  let userDay = getDay(dD,mM,cC,yY);

  if(genderInput === "male"){
    if(userDay===0){
      alert("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay === 1){
      alert("Your Akan name is:" +maleNames[userDay]);
   } 
    else if(userDay === 2){
      alert("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay === 3){
      alert("Your Akan name is:" +maleNames[userDay]);
   }
    else if(userDay === 4){
      alert("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay === 5){
      alert("Your Akan name is:" +maleNames[userDay]);
    }
    else if(userDay === 6){
      alert("Your Akan name is:" +maleNames[userDay]);
    }
    else{
      alert("Kindly enter your details in correct format");
    }
  }
  if(genderInput=== "female"){

    if(userDay === 0){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay ===1){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay === 2){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay === 3){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay === 4){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay === 5){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else if(userDay === 6){
      alert("Your Akan name is:" +femaleNames[userDay]);
    }
    else{
      alert("Kindly enter your details in required format");
    }
  }
}
