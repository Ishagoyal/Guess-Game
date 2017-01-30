
var guessInputText;
var guessInput;
var randomNumber;
var randomNumberInteger;
var targetNumber;
var guessCount=0;
var guess=false;

function startGame(){
  
  randomNumber=Math.random() * 100;
  randomNumberInteger= Math.floor(randomNumber);
  target=randomNumberInteger + 1;
  while(guess!=true){
     guessInputText=$('#number').val();
	 guessInputInteger=parseInt(guessInputText);
	 guessCount++;
	 guess=checkGuess();
	 
  }
  

}

function checkGuess(){

   if(!guessInputInteger.isInteger()){
    alert("Please enter a number!");
	guess=false;
   }
   else if(guessInputInteger>100 || guessInputInteger<1){
   
     alert("Please enter the number in the range of 1 to 100 only!");
	 guess=false;
   }
   
   else if(guessInputInteger<target){
     alert("Too small than the guessed number!");
	 guess=false;
   }
   
   else if(guessInputInteger>target){
   
     alert("Too large than the guessed number!");
	 guess=false;
   }
   
   else if(guessInputInteger==target){
     alert("Congratulations! You got the number!\n And it took you" + guessCount + "guesses in finishing the game!");
	 guess=true;
   }
   return guess;
}