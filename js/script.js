const buttonContainer = document.getElementById('ratings');
const buttons = buttonContainer.getElementsByClassName('circle');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() { /* every time x button is clicked ... */ 
    var current = document.getElementsByClassName('active'); 

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", ""); /* remove active class from which every button has active class (every button is checked via the for loop) */ 
    }

    this.className += " active"; /* add class active to the clicked button. */ 
  })
  /* it adds the class to the currently selected button due to- the event listener is assigned to buttons[i] so it'll be 1 of the buttons. the [i] and the this.className assigns it to the currently clicked button. */
}

