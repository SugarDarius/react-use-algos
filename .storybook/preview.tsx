import { themes } from '@storybook/theming';

export const parameters = {
    options: {
        storySort: {
            order: ['Greetings', 'Collections', 'Algos', 'Formulas'],
        }
    },
    docs: {
        theme: themes.dark,
    }
};