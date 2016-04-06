

//This testing will walk through a complete game, checking all aspects of a single game.
describe("Beginning of the Match", function() {

	var game;
	beforeEach(function() {
		game = tennisMatch.getInstance('Bugs', 'Expo');
	});

	afterEach(function() {
		game.resetGame();
	});

  	it("Checking the Players Names", function() {
		expect(game.names()).toContain('Bugs');
		expect(game.names()).toContain('Expo');
  	});

  	it("Names should not Include Numbers", function() {
  		expect(game.names()).not.toContain(1);
 	});

  	it("Singleton instance should be defined, once a game is intialized", function() {
  		expect(game.instanceCheck()).toBeDefined();
  	});

});


	describe('Adding Score to Game', function() {
		var match;

		beforeEach(function() {
			match = tennisMatch.getInstance('Cyrus', 'Fuse');
			match.pointForPlayerOne();
			match.pointForPlayerTwo();
			match.pointForPlayerTwo();
		});

		afterEach(function() {
			match.resetGame();
		});
		it('Keep accurate score for a match', function() {
			expect(match.scoreForPlayerOne()).toEqual(1);
		});

		it('Score for both players', function() {
			expect(match.bothPlayerPoints()[0]).toBe(1);
			expect(match.bothPlayerPoints()[1]).toBe(2);

		});

		it('Converting score to Tennis terminology', function () {
			expect(match.doesTheScoreConverterWork()(2)).toBeDefined();
			expect(match.doesTheScoreConverterWork()(2)).toBe('THIRTY');
			expect(match.doesTheScoreConverterWork()(0)).toBe('LOVE');
			expect(match.doesTheScoreConverterWork()(3)).toBe('FORTY');
			expect(match.doesTheScoreConverterWork()(1)).toBe('FIFTEEN');
		});

	});

describe('Love, Dueces, Advantage, Winner, Reset', function() {
	var finalMatch;

		beforeEach(function() {
			finalMatch = tennisMatch.getInstance('Richie Rich', 'Red');
		});

		afterEach(function() {
			finalMatch.resetGame();
		});

		it('When match is scoreless returns True', function() {
			expect(finalMatch.love()).toBeTruthy();
		});

		it('When both players score 3 <= points and are tied returns True ', function () {
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();

			expect(finalMatch.dueces()).not.toBeFalsy();
		});

		it('When both players score 4 <= points, however one player is ahead by one point return TRUE', function() {
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();

			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();

			expect(finalMatch.advantage()).toBeTruthy();


		});

		it('When a player scores 4 <= points and is winning by 2 points return True', function () {
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();

			expect(finalMatch.winner()).toBe(true);

		});

		it('Checks to see who is winning the match returns name', function() {
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();

			expect(finalMatch.whoIsWinning()).toBe('Red');

		});

		it('All values get reset when user resets game return true', function () {
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerOne();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();
			finalMatch.pointForPlayerTwo();
			finalMatch.resetGame();

			expect(finalMatch.instanceCheck()).toBe(undefined);
			expect(finalMatch.names()).toContain('');
			expect(finalMatch.statusOnGreeting()).toBeFalsy();
		});

});








