import { themes } from '@storybook/theming';

export const parameters = {
    options: {
        storySort: {
            order: ['Greetings', 'DataTypes', 'Algos'],
        }
    },
    docs: {
        theme: themes.dark,
    }
};