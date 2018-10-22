//Standard Pomodoro Timer Using Vanilla Javascript
//By Luke Rees

//create variables for study and off times
var study = document.querySelector('#study')
var off = document.querySelector('#break')
  //create var for progress bar percentage, start it off at 0
var start = 0;
//create the initial time var which will be the study input converted into seconds
var time = study.value * 600;
//create an empty global var go for the interval function
var go;
//create the initial algo var which will calculate how much time is left
var algo = study.value;

//create a function called timer
function timer() {
  //craete a study time that is the value of the study input
  var studyTime = study.value * 600
    //create a break time that is the value of the off input
  var offtime = off.value * 600
    //if the start var is greater than or equal to 100
  if (start >= 100) {
    //reset the start var to 0
    start = 0
      //if the time var is set to the study time var
    if (time == studyTime) {
      //replace the time var with the offtime var (the break time)
      time = offtime
      //replace the time var with the break time value
      algo = off.value
        //change the activity <p> to state 'Take a Quick Break!'
      document.querySelector('.descr').innerHTML = 'Take a Quick Break!'
        //change the progress bar color to red
      document.querySelector('.time').style.background = 'red'
    }
    //if the time var is not set to the study time var
    else {
      //replace the time var with the studyTime var (the study time)
      time = studyTime
      //replace the time var with the study time value
      algo = study.value
        //change the activity <p> to state 'Time To Study!'
      document.querySelector('.descr').innerHTML = 'Time To Study!'
        //change the progress bar color to green
      document.querySelector('.time').style.background = 'green'
    }
  }
  //if the start var is not greater than or equal to 100
  else {
    //increase the start var by 100 / the time var (algo to ensure the time is divided correctly)
    start += 100 / time;
    //increase the progress bar by the start var with the % added
    document.querySelector('.fill').style.width = start + '%';
    //display on the progress bar the amount of time left
    document.querySelector('.what').innerHTML = Math.ceil((100 - start) / (100 / algo)) + 'm to go!'
  }
}

//create an event listener for the play button that will start the interval function upon click
//the interval function will call the timer function every second
document.querySelector('.play').addEventListener('click', function() {
  go = setInterval(timer, 100)
})

//create an event listener for the pause button that will stop the interval function upon click
document.querySelector('.pause').addEventListener('click', function() {
  clearInterval(go)
})