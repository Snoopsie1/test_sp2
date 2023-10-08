import { defineFeature, loadFeature } from 'jest-cucumber';
import { reverseString } from '../functions/reverseString';

const feature = loadFeature('./src/features/reverseString.feature');

defineFeature(feature, (test) => {
	let string: string;
	let reversedString: string;

	test("Reverse 'aBc'", ({ given, when, then }) => {
		given(/^the string is (.+)$/, (f: string) => {
			string = f;
		});

		when('I reverse the string', () => {
			reversedString = reverseString(string);
		});

		then(/^the string should be (.+)$/, (expectedString: string) => {
			expect(reversedString).toBe(expectedString);
		});
	});
});
