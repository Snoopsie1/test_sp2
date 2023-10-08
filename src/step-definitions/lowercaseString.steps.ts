import { defineFeature, loadFeature } from 'jest-cucumber';
import { lowercaseString } from '../functions/lowercaseString';

const feature = loadFeature('./src/features/lowercaseString.feature');

defineFeature(feature, (test) => {
	let string: string;
	let lowercasedString: string;

	test("Lowercase 'aBc'", ({ given, when, then }) => {
		given(/^the string is (.+)$/, (f: string) => {
			string = f;
		});

		when('I lowercase the string', () => {
			lowercasedString = lowercaseString(string);
		});

		then(/^the string should be (.+)$/, (expectedString: string) => {
			expect(lowercasedString).toBe(expectedString);
		});
	});
});
