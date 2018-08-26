var reset = document.getElementById('reset')
var button = document.getElementsByClassName('button')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var b5 = document.getElementById('b5')
var b6 = document.getElementById('b6')
var b7 = document.getElementById('b7')
var b8 = document.getElementById('b8')
var b9 = document.getElementById('b9')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var currentPlayer = 'player1'
var currentMarker = 'X'

function whoJustPlayed (){
  if (currentPlayer === 'player1') {
    console.log(currentPlayer)
    // console.log('next player is player2')
    currentPlayer = 'player2'
    currentMarker = 'O'
  } else {
    console.log(currentPlayer)
    // console.log('next player is player1')
    currentPlayer = 'player1'
    currentMarker = 'X'
  }
}




// function compare(userChoice, pcChoice) {
//   if ((userChoice == 'Rock' && pcChoice == 'Scissors')||(userChoice == 'Paper' && pcChoice == 'Rock')||(userChoice == 'Scissors' && pcChoice == 'Paper')) {
//     alert(`Pc chose ${pcChoice}. You Win!`)
//   } else if (userChoice == pcChoice) {
//     alert(`Pc chose ${pcChoice}. Tie!`)
//   } else {
//     alert(`Pc chose ${pcChoice}. You Lose!`)
//   }
// }






function setMarkerB1 () {
  b1.innerHTML = currentMarker
}
function setMarkerB2 () {
  b2.innerHTML = currentMarker
}
function setMarkerB3 () {
  b3.innerHTML = currentMarker
}
function setMarkerB4 () {
  b4.innerHTML = currentMarker
}
function setMarkerB5 () {
  b5.innerHTML = currentMarker
}
function setMarkerB6 () {
  b6.innerHTML = currentMarker
}
function setMarkerB7 () {
  b7.innerHTML = currentMarker
}
function setMarkerB8 () {
  b8.innerHTML = currentMarker
}
function setMarkerB9 () {
  b9.innerHTML = currentMarker
}
reset.addEventListener('click', function(){
  // currentMarker = 'X'
  // b1.innerHTML = ""
  // b2.innerHTML = ""
  // b3.innerHTML = ""
  // b4.innerHTML = ""
  // b5.innerHTML = ""
  // b6.innerHTML = ""
  // b7.innerHTML = ""
  // b8.innerHTML = ""
  // b9.innerHTML = ""
  document.location.reload()
})

// function winner(){
//   if ((b1 === 'X' && b2 ==='X' && b3 === 'X')|| (b4 ==='X' && b5 ==='X' && b6 ==='X')||(b7 ==='X' && b8 ==='X' && b9 ==='X')
// ||(b1 ==='X' && b4 ==='X' && b7==='X')||(b2 ==='X' && b5 ==='X' && b8 ==='X')
// ||(b3 ==='X' && b6 ==='X' && b9 ==='X')||(b1 ==='X' && b5 ==='X' && b9 ==='X')
// ||(b3 ==='X' && b5 ==='X' && b7 ==='X')){
//   alert('winner')
// }else{
//   alert('loser')
// }
// }
b1.addEventListener('click', setMarkerB1)
b2.addEventListener('click', setMarkerB2)
b3.addEventListener('click', setMarkerB3)
b4.addEventListener('click', setMarkerB4)
b5.addEventListener('click', setMarkerB5)
b6.addEventListener('click', setMarkerB6)
b7.addEventListener('click', setMarkerB7)
b8.addEventListener('click', setMarkerB8)
b9.addEventListener('click', setMarkerB9)
b1.addEventListener('click', whoJustPlayed)
b2.addEventListener('click', whoJustPlayed)
b3.addEventListener('click', whoJustPlayed)
b4.addEventListener('click', whoJustPlayed)
b5.addEventListener('click', whoJustPlayed)
b6.addEventListener('click', whoJustPlayed)
b7.addEventListener('click', whoJustPlayed)
b8.addEventListener('click', whoJustPlayed)
b9.addEventListener('click', whoJustPlayed)







