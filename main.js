
var button = document.getElementsByClassName('button')
var b1 = document.getElementById('b1')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var players = ['X','O']
var currentTurn = 0
var playersChoice = ""


function choice () {
  for (var i=0; i < players.length; i++)
  console.log(choice)
}
choice()
// for (var i=0; i < players.length; i++)



b1.addEventListener('click', function() {
  
  b1.innerHTML = playersChoice
  
})
