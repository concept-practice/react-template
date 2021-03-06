module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	verbose: true,

	rootDir: '',

	testPathIgnorePatterns: ['/node_modules/'],

	setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],

	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleDirectories: ['node_modules', './'],

	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},

	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'text', 'text-summary', 'lcov', 'clover'],
	coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/constants/'],
	coverageThreshold: {
		global: {
			// TODO: Set back to 80 once this is fixed.
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
};
