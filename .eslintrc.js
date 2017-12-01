module.exports = {
	extends: 'airbnb',
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		semi: ['error', 'always'],
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/prefer-stateless-function': 0,
		'no-unused-expressions': 0,
	},
};
