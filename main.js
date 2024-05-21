const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#btn")
const hiddenDiv = document.querySelector(".submittedPart")
const mainSubmitPart = document.querySelector(".submitPart")
const dismissButton = document.querySelector(".dismissButton")

const emailInputValue = emailInput.value

const email = "@"
const origin = "."



submitButton.addEventListener("click", function() {
    event.preventDefault();

    let form = document.querySelector('.form-example')
    let p = document.createElement('p');
    p.classList.add('error');
    emailInput.classList.add('inputError')
    p.textContent = `The word ${
      emailInputValue.includes(email, origin) ? 'is' : 'is not'
    } in the sentence`;

mainSubmitPart.classList.add("hidden")
hiddenDiv.classList.remove("hidden")

    if(form.contains(p)) {
      form.removeChild(p[0])
    }
    else {
      form.appendChild(p)
    }
   
    
});
    

dismissButton.addEventListener("click", function() {
  hiddenDiv.classList.add("hidden")
  mainSubmitPart.classList.remove("hidden")
})
