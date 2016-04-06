//Creating a Singleton for a Match

var tennisMatch = (function(){

	//Creating an Instance of a Match
	var match;

	//Create Game
	var createMatch = function createGame(firstName, secondName) {

		var that = this;
		//Variables
		that.firstName = firstName;
		that.secondName = secondName;
		that.firstScore = 0;
		that.secondScore = 0;
		that.greetings = false;


		//Greetings Players for new game and establishes who is player one and two
		var welcomePlayers = function welcome() {

			if(that.greetings === true) {
				return;
			}
			that.greetings = true;


			console.log("In the great words of Barney Stinson: 'Challenge Accepted!!!'  Player One: " + that.firstName + " & Player Two: " + that.secondName);

		};
		welcomePlayers();



		//Adding Point to Player One Score
		var scorePlayerOne = function add() {
			that.firstScore++;
			return checkResults();
		};

		//Adding Point to Player Two Score
		var scorePlayerTwo = function add() {
			that.secondScore += 1;
			return checkResults();
		};

		//Check
		var checkResults = function() {

			if ( dueces() ) {

				return "DUECE, YOU WON'T FIND ANY BETTER TALENT THAN THESE TWO PLAYING TODAY!";

			} else if ( love() ) {

				return "LOVE";

			} else if ( winner() ) {

				return "THAT IS WHAT YOU CALL A CLINIC, " + whoIsWinning() + " is the WINNER!!!!!!!";


			} else if( advantage() ) {

				return "ADVANTAGE " + whoIsWinning() + " THIS IS INTENSE!!";

			}

			return checkScore();
		};

		var checkScore = function checkScore () {

			return that.firstName + ": " + scoreConverter(that.firstScore) + " vs " + that.secondName + ": " + scoreConverter(that.secondScore);
		};


		//Functionality for checkResults
		var dueces = function() {

			if( (that.firstScore === that.secondScore) &&
				(that.firstScore >= 3) === (that.secondScore >= 3) ) {
				return true;
			}

			return false;
		};

		var love = function love() {

			if (that.firstScore === that.secondScore) {
				return true;
			}

			return false;
		};

		var advantage = function advantage() {

			if( (that.firstScore >= 4) && (that.firstScore >= that.secondScore + 1) ) {

				return true;

			} else if ( (that.secondScore >= 4) && (that.secondScore >= that.firstScore + 1) ) {

				return true;

			}

			return false;

		};

		var whoIsWinning = function highScore() {

			return that.firstScore > that.secondScore ? that.firstName : that.secondName;

		};

		var winner = function winner() {

			if ( (that.firstScore >= 4) && (that.firstScore >= that.secondScore + 2) ) {

				return true;

			} else if ( (that.secondScore >= 4) && (that.secondScore >= that.firstScore + 2) ) {

				return true;

			}

			return false;
		};



		//Convert Scores to Tennis Terminology
		var scoreConverter = function findScore(score) {

			if(score === 0) {

				return "LOVE";


			} else if (score === 1) {

				return "FIFTEEN";


			} else if (score === 2) {

				return 'THIRTY';


			} else {

				return "FORTY";

			}
		};



		//Resetting Game and All Variables
		var resetGame = function resetGame() {
			match = undefined; 				//resetting instance
			that.firstName = '';
			that.secondName = '';
			that.firstScore = 0;
			that.secondScore = 0;
			that.greetings = false;
			console.log("Game has been reset!")
			return true;
		}


/*
 *	Testing Purposes to Expose Singleton variables/functionality
*/
		var playersName = function playersNames() {
			return [that.firstName, that.secondName];
		};

		//Checking if match is defined/undefined
		var instanceCheck = function instanceCheck() {
			return match;
		};

		var statusOnGreeting = function statusOnGreeting() {
			return that.greetings;
		};

		var doesTheScoreConverterWork = function converter() {
			return scoreConverter;
		};

		var bothPlayerPoints = function bothPlayerPoints() {
			return [that.firstScore, that.secondScore];
		};

		var scoreForPlayerOne = function scoreForPlayerOne() {
			return that.firstScore;
		};

		var scoreForPlayerTwo = function scoreForPlayerTwo() {
			return that.secondScore;
		};




		return {

			pointForPlayerOne: scorePlayerOne,
			pointForPlayerTwo: scorePlayerTwo,
			resetGame: resetGame,				//Testing too
			checkResults: checkResults,
			//Testing functionality
			names: playersName,
			bothPlayerPoints: bothPlayerPoints,
			instanceCheck: instanceCheck,
			statusOnGreeting: statusOnGreeting,
			doesTheScoreConverterWork: doesTheScoreConverterWork,
			scoreForPlayerOne: scoreForPlayerOne,
			scoreForPlayerTwo: scoreForPlayerTwo,
			dueces: dueces,
			love: love,
			advantage: advantage,
			winner: winner,
			whoIsWinning: whoIsWinning

		};



	};



	return {
		//Checking to see if an instance
		//has already been created, if not
		//create an instance, else return the instance
		getInstance: function(firstName, secondName){
			var frstName = firstName;
			var secName  = secondName;
			if(!match) {
				match = createMatch(frstName, secName);
			}

			return match;
		}

	};


})();


