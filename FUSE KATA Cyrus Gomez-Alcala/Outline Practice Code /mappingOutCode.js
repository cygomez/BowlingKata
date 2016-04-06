/*
INFORMATION:

If both have 40 the players are deuce.
	a. If the game is in deuce, the winner of a ball will have
		advantage and game ball.
	b. If the player with advantage wins the ball he wins the game
	c. If the player without advantage wins they are back at deuce.

1. A game is won by the first player to have won at least four points in
total and at least two points more than the opponent.

2. The running score of each game is described in a manner peculiar to tennis:
scores from zero to three points are described as "love", "fifteen", "thirty",
and "forty" respectively.

3. If at least three points have been scored by each player, and the
scores are equal, the score is "deuce"

4. If at least three points have been scored by each side and a
player has one more point than his opponent, the score of the game
is "advantage" for the player in the lead.

0 to 3 points are described as "love", "fifteen", "thirty", and "forty"




//SETUP

//two players
	//names
	//points

//functionality
	//set Names
		//SET THE PLAYERS NAMES
	//reset Game
		//SETS EVERYTHING BACK TO EMPTY
	//ADD SCORE FOR EACH PLAYER
		//ADDS ONE POINTS TO PLAYERS SCORE
	//Who is Winning
		//checks the highest score
	//CHECK FOR WINNER
		//FIRST PLAYER TO 4 POINTS AND MORE THAN 2 MORE POINTS THAN OPPENENT
	//ADVANTAGE ZONE PROCCESS
		//SCORE IS 3 ON EACH SIDE CALLED "DUECE"
			//ONE MORE POINT THAN OPPENENT IS CALLED "ADVANTAGE"
				//MEANS THAT PLAYER IS IN THE LEAD
		//HAVE TO WIN BY TWO POINTS IN A ROW
	//SHOW SCORE
		//0 = LOVE
		//1 = FIFTEEN
		//2 = THIRTY
		//3 = FORTY
	//ANNOUNCE WINNER
		//ANNOUCES THE WINNER OF THE GAME NAME


//PROCESS

//CREATE A GAME
	//INPUT THE PLAYERS NAMES
//ADD A SCORE
	//INCREMENTS THE SCORE TO PLAYER
	//CHECKS THE SCORE TO SEE IF THERE IS A WINNER
		//IF THERE IS ANNOUCE WINNER
	//TRANSLATE THE SCORE INTO TENNIS TERMINOLOGY
		//RETURNS THE NAMES/SCORE OF THE GAME
			//EX: NAME: SCORE NAME: SCORE
//USER MUST RESET GAME TO CLEAR THE BOARD

PRACTICE GAME
	var matchOne = tennisMatch.getInstance('cyrus', 'veronica');



	matchOne.pointForPlayerOne();

	matchOne.checkResults();
	matchOne.pointForPlayerOne();
	matchOne.names();
	typeof matchOne.instanceCheck() === 'object';
	matchOne.statusOnGreeting() === true;
	matchOne.doesTheScoreConverterWork()(2) === 'THIRTY';
	matchOne.playerPoints();


	matchOne.resetGame();

	var matchTwo = tennisMatch.getInstance('Money', 'Cents');
	matchTwo.pointForPlayerOne();
	matchTwo.pointForPlayerOne();
	matchTwo.pointForPlayerTwo();
	matchTwo.pointForPlayerTwo();
	matchTwo.pointForPlayerTwo();
	matchTwo.pointForPlayerOne();
	matchTwo.pointForPlayerOne();
	matchTwo.checkResults();
	matchTwo.pointForPlayerTwo();
	matchTwo.pointForPlayerTwo();
	matchTwo.pointForPlayerTwo();


	******FUNCTIONALITY RETURN FROM SINGLETON******
		pointForPlayerOne: scorePlayerOne,
		pointForPlayerTwo: scorePlayerTwo,
		resetGame: resetGame,
		checkResults: checkResults,


//Testing functionality
			names: playersName,
			bothPlayerPoints: bothPlayerPoints,
			instanceCheck: instanceCheck,
			statusOnGreeting: statusOnGreeting,
			doesTheScoreConverterWork: doesTheScoreConverterWork,
			dueces: dueces,
			love: love,
			advantage: advantage,
			winner: winner,
			whoIsWinning: whoIsWinning



*/
