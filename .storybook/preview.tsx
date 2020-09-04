import { themes } from '@storybook/theming';

export const parameters = {
    options: {
        storySort: {
            order: ['Greetings', 'DataTypes', 'Algos', 'Formulas'],
        }
    },
    docs: {
        theme: themes.dark,
    }
};