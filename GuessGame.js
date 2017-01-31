
var guessInputText;
var guessInput;
var randomNumber;
var randomNumberInteger;
var targetNumber;
var guessCount=0;
  randomNumber=Math.random() * 100;
  randomNumberInteger= Math.floor(randomNumber);
  target=randomNumberInteger + 1;
 // console.log(target);

function startGame(){
  
  
     guessInputText=document.getElementById("number").value;
	// console.log(guessInputText);
	 guessInputInteger=parseInt(guessInputText);
	 
	 checkGuess();
	 

}

function checkGuess(){

   if(!Number.isInteger(guessInputInteger)){
    alert("Please enter a number!");
	guessCount++;
	
   }
   else if(guessInputInteger>100 || guessInputInteger<1){
   
     alert("Please enter the number in the range of 1 to 100 only!");
	 guessCount++;
	 
   }
   
   else if(guessInputInteger<target){
     alert("Too small than the guessed number!");
	 guessCount++;
	 
   }
   
   else if(guessInputInteger>target){
   
     alert("Too large than the guessed number!");
	 guessCount++;
	 
   }
   
   else if(guessInputInteger==target){
     alert("Congratulations! You got the number!\n And it took you " + guessCount + " guesses in finishing the game!");
	 guessCount++;
	 
   }
   
}

function resetGame(){
guessCount=0;
  randomNumber=Math.random() * 100;
  randomNumberInteger= Math.floor(randomNumber);
  target=randomNumberInteger + 1;
	   document.getElementById("number").value="";

}