import { defineFeature, loadFeature } from 'jest-cucumber';
import { Game } from '../classes/Game';

const feature = loadFeature('./src/features/bowling.feature');

defineFeature(feature, (test) => {
	let rollsThrown: number;
	let hitPins: number;

	const rollMany = (game: Game, i: number, pins: number) => {
		for (let j = 0; j < i; j++) {
			game.roll(pins);
		}
	};

	const rollSpare = (game: Game) => {
		game.roll(5);
		game.roll(5);
	};

	// - - - - - - - - - - Gutter Game Test - - - - - - - - - -
	test('Gutter game', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins$/, (pinsHit: number) => {
			hitPins = Number(pinsHit);
			rollMany(game, Number(rollsThrown), hitPins);
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});

	// - - - - - - - - - - Rolling All Ones Test - - - - - - - - - -
	test('Hitting 1 pin 20 times', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pin 20 times$/, (pinsHit: number) => {
			hitPins = Number(pinsHit);
			rollMany(game, Number(rollsThrown), hitPins);
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});

	// - - - - - - - - - - Rolling 1 Spare Test - - - - - - - - - -
	test('Hitting 1 spare', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins 2 times$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollSpare(game);
		});

		when(
			/^I hit (\d+) pins (\d+) times$/,
			(pinsHit: number, timesThrown: number) => {
				game.roll(Number(pinsHit));
				rollMany(game, Number(timesThrown), 0);
			}
		);

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});

	// - - - - - - - - - - Rolling 1 Strike Test - - - - - - - - - -
	test('Hitting 1 strike', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) time$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollMany(game, rollsThrown, Number(hitPins));
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});

	// - - - - - - - - - - Rolling a Perfect Game Test - - - - - - - - - -
	test('Getting a perfect game', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollMany(game, rollsThrown, Number(hitPins));
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});
});
