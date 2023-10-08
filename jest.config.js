module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec|steps))\\.ts$',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};
