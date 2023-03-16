document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  // if (day === "Tuesday" || day === "Thursday")  {
  //   alert ('Class Day')
  // } else if (day === "Saturday" || day === "Sunday") {
  //   alert ('Weekend')
  // } else {
  //   alert ('Boring')
  // }
  
  let message;

  if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
    message = 'Class Day';
  } else if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
    message = 'Weekend';
  } else {
    message = 'Boring';
  }

  document.querySelector('#placeToSee').textContent = message;
}
