import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: {
        ...themes.dark,
        brandTitle: 'React Use Algos',
        brandImage: 'https://sugardarius.github.io/react-use-algos/logo.png',
    },
});