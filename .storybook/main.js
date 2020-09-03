module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(ts|tsx)',
    ],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                transcludeMarkdown: true
            }
        },
    ]
};