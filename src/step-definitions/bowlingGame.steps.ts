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

	test('Gutter game', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollMany(game, rollsThrown, hitPins);
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});

	test('Hitting 1 pin 20 times', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pin 20 times$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollMany(game, rollsThrown, hitPins);
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score().toString().length).toBe(Number(expectedScore));
		});
	});

	test('Hitting 1 spare', ({ given, when, then }) => {
		const game = new Game();
		given(/^that I throw the bowling-ball (\d+) times$/, (f: number) => {
			rollsThrown = f;
		});

		when(/^I hit (\d+) pins 2 times$/, (pinsHit: number) => {
			hitPins = pinsHit;
			rollSpare(game);
			game.roll(3);
			rollMany(game, rollsThrown - 3, 0);
		});

		then(/^the score should be (\d+)$/, (expectedScore: number) => {
			expect(game.score()).toBe(Number(expectedScore));
		});
	});
});
