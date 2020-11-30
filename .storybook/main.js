module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
        '../src/**/*.stories.@(ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
            name: '@storybook/addon-docs',
            options: {
                transcludeMarkdown: true
            }
        },
	],
};
