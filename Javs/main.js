//variable declaration
const myForm = document.querySelector('.dos');

const dobInput = document.querySelector('#dobb');

const genderInput = document.querySelector('#gender');

const btn = document.querySelector('.buttonn');
btn.addEventListener('click', (e)=> 
  {e.preventDefault();
  console.log('click');
})

myForm.addEventListener('Submit', onSubmit);
function onSubmit(e){
  alert("thanks ");}
  e.preventDefault();
  if(dobInput.value === null || genderInput.value === null)
   {
      alert('Please select required fields')
     }
     else{
       console.log('success');
     }
}
let dob =  document.querySelector('input[type="date"]')
  console.log(dob.value);
