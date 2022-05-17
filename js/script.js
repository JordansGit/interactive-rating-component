const buttonContainer = document.getElementById('ratings');
const buttons = buttonContainer.getElementsByClassName('circle');

const submit = document.getElementById('submit');
const state1 = document.querySelector('.default-state');
const state2 = document.querySelector('.submitted-state');
const selRating = document.querySelector('#selected-rating > p > span');

let currRating; // define it outside the function so we can access it again in the submit button. 

// 1-5 buttons function. 
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) { /* every time x button is clicked ... */ 
    currRating = e.target.innerText; // get the inner text of the button clicked and assign it to curr rating variable. 

    var current = document.getElementsByClassName('active'); 

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", ""); /* remove active class */ 
    }

    this.className += " active"; /* add active class to the clicked button. */ 

  })
}

// Submit button function
submit.addEventListener('click', function() {
  console.log(currRating);
  if (currRating) { // equal to if curr rating is not undefined, null, empty string, 0, NaN, false, do ... 
    state1.style.display = "none";
    state2.style.display = "flex";
    selRating.textContent = currRating;   
  }
})

/* 
some learning notes: 
  remove active class:  from which every button has active class (every button is checked via the for loop) 
  it adds the class to the currently selected button due to- the event listener is assigned to buttons[i] so it'll be 1 of the buttons. the [i] and the this.className assigns it to the currently clicked button. 

  we use e inside the function so we can get the value of a button, every time we press it. 
  e.target gets the whole html line of the thing we just clicked on (so the whole button tag)
  e.target.innerText gets the text of the above (note: this is used in js calculators)

*/

/* to do 
when a number is selected + submitted is clicked. 
  change state 1 to display none and state 2 to display flex 
  put whatever number is selected inside the inner html of span tags. span tags are inside #selected-rating

*/ 

/* 
need to add a function that gets 

*/ 