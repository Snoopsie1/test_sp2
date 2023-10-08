import { defineFeature, loadFeature } from 'jest-cucumber';
import { capitalizeString } from '../functions/capitalizeString';

const feature = loadFeature('./src/features/capitalizeString.feature');

defineFeature(feature, (test) => {
	let string: string;
	let capitalizedString: string;

	test("Capitalize 'aBc'", ({ given, when, then }) => {
		given(/^the string is (.+)$/, (f: string) => {
			string = f;
		});

		when('I capitalize the string', () => {
			capitalizedString = capitalizeString(string);
		});

		then(/^the string should be (.+)$/, (expectedString: string) => {
			expect(capitalizedString).toBe(expectedString);
		});
	});
});
