var computerScore = 0;
var playerScore = 0;


//Clic sur le bouton jouer, execution des fonctions
$('#shifumi').click(function(e) {
  //Choix du joueur
  var player = $('#player').val();
  //Chiffre aléatoire
  var randomNumber = Math.floor(Math.random()*3)
  //Choix de l'ordinateur
  if (randomNumber == 0) {
    var computer = "Pierre";
  }
  else if (randomNumber == 1) {
    var computer = "Feuille";
  }
  else {
    var computer = "Ciseaux";
  }

  //Comparaison des résultats, stocké dans $result
  if ((computer == "Pierre" && player == "Ciseaux") || (computer == "Feuille" && player == "Pierre") || (computer == "Ciseaux" && player == "Feuille")) {
    var result = "Tu as perdu !";
    computerScore++;
  }
  else if (computer == player) {
    var result = "C'est un match nul !";
  }
  else {
    var result = "Tu as gagné !";
    playerScore++;
  }

  //Calcul pourcentage

  var partyNb = playerScore + computerScore;
  var playerPercent = Math.round(playerScore*100/(partyNb));
  $('.left').text("Vous : " + playerScore + "(" + playerPercent + "%)");
  $('.right').text("Ordinateur : " + computerScore);
  $('#result').html("L'ordinateur a joué <b>" + computer + "</b>, " + result);

});
var partyNb = playerScore + computerScore;
    var playerPercent = playerScore*100/(partyNb);
