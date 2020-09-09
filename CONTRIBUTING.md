# Contributing

Thanks you very much for willing to contribute to the `React Use Algos` project.<br />
Your contribution will be really appreciated to help the project to become better than it is today!

Make sure if you agree to contribute to this project, your work will be released under the [MIT License](https://github.com/SugarDarius/react-use-algos/blob/master/LICENSE).

As a contributor we would like to follow these guide lines to make a well structured project 😀:

* [Code of Conduct](#code-of-conduct)
* [Issues and Bugs](#issues-and-bugs)
* [Project setup](#project-setup)
* [Coding Rules](#coding-rules)
* [Committing and Pushing](#committing-and-pushing)
* [Help](#help)

## Code of Conduct
The `React Use Algos` project owns a code of conduct you can read [here](https://github.com/SugarDarius/react-use-algos/tree/master/CODE_OF_CONDUCT.md).

## Issues and Bugs
First, is you have any questions about general support, it's better to ask them on the net or on [stackoverflow](https://stackoverflow.com/).<br />
We want to keep GitHub issues for issues and bugs reports, we thinks this is the way 😊.

### Have you found an issue or a bug?
If you have found an issue or a bug in the source code, a mistage or a type into the documentation, you can [submit and issue](#submitting-an-issue) into our [GitHub repository](https://github.com/SugarDarius/react-use-algos).<br />
We will really love if do event more by [submitting a pull request](#submitting-a-pull-request) with a fix 🙏🏻. 

### Submiting an Issue
Before submitting an issue, please search and make sure you can't find it into the issue tracker.<br />
Someties your issue is already into it and maybe it's already resolved or you can find from the discussion some workarounds to help you.

When you create your issue it's very important to give us informations about it as muuch as possible.

So we will need this kind of informations: 
* Describe the bug
* What is the current behavior?
* Steps to reproduce
* What is the expected behavior?

And of course we will need more informations about your envionment:
* OS (e.g macOS 10.15.5, Windows 10, ...)
* Browser (e.g. Chrome 65.x, ...)
* React version (e.g 16.13.1)
* `react-use-algos` verion (e.g. 1.0.0)

Also, tells us if this worked into the previous package's versions.

More importantly, we will really appreciate if you can create a minimal demo on [CodeSandbox](https://codesandbox.io/), [Stackblitz](https://stackblitz.com/) or any else which can ce integrated into the issue or linked into it.

You can file new issues by filling out our [new issue form](https://github.com/SugarDarius/react-use-algos/issues/new).

A bug report template is available [here](https://github.com/SugarDarius/react-use-algos/tree/master/.github/ISSUE_TEMPLATE/bud_report.md)

### Submitting a pull request
Before submitting a pull request, please search and make sure you can't find it into the list of already existing pull requests.<br />
It's better to not duplicate the effort.

### PR branch rules
Your PR branch must always based on the `master` branch.
You must never create a PR branch from another branch than the `master`.

### Naming PR branch convntion
By default each pull request branch must be prefixed with `pr/`.

Each pr/ branches must have a scope and subject:

* Scopes:
    * bugfix
    * feature
    * breaking-change
    * code-style-update
    * refactoring
    * build
    * ci
    * documentation
    * other
* Subjects:
    * [(create|update)-]?hook-[hook-name]
    * a config
    * ...

For examples: 

* PR to fix a bug on a existing hook:
    ```sh
    pr/bugfix-hook-use-queue
    ```
* PR to create a new hook
    ```sh
    pr/feature-create-hook-use-queue
    ```
* PR to update a new hook
    ```sh
    pr/feature-update-hook-use-queue
    ```
* PR to update the CI config
    ```sh
    pr/ci-config-update
    ```

Feel free to create an issue if the convention seems weird or not revelant to you 😊

A pull request template is available [here](https://github.com/SugarDarius/react-use-algos/tree/master/.github/PULL_REQUEST_TEMPLATE.md)

## Project setup
Firs you need to setup the projet<br />
You must follow the instructions below:

* Fork and clone the repo
* Installing dependencies
    ```sh
    npm install
    ```
* Create a new branch to make your changes
    ```sh
    git checkout -b pr/my-branch-name master
    ```

## Coding Rules
To develop into the projet you must follow some coding rules.<br />
This is very important to keep the project clean and effcient.

### Creating a new hook
To create a new hook you need to put it under the `src/` directory.<br />
This directory is split into several directories:
* algos
    * misc
    * random
    * search
    * sorting
* collections
* formulas

Be sure to put it into the correct directory!

Here's the list of the files you need to create to create a new hook:
* Create the main file `src/<sub_director(y|ies)>/use-your-hook-name.hook.ts`
* Create the test file `src/<sub_director(y|ies)>/use-your-hook-name.hook.spec.ts`
* Create the documentation file `docs/use-your-hook-name.hook.md`
* Create the storybook file `src/<sub_director(y|ies)>/use-your-hook-name.hook.stories.mdx`.<br />
    This is a simple `.mdx` file which imports the documentation file and add some [Storybook](https://storybook.js.org/) code stories.
* export your hook into the `index.ts` file of the current directory.
* add you hook into the [READM.md](https://github.com/SugarDarius/react-use-algos/tree/master/README.md) file and link the documentation file

Of couse if you prefer you to write your test file first you can 😀

> Important: Be sure to use the [React Hooks API](https://reactjs.org/docs/hooks-reference.html), otherwise your hook will not merged.

### Updating an existing hook
TO update a hook you need to: 
* Code the changes into the hook main file
* Update the test file of the hook and / or new tests. 
    > Remember your need a coverage at 100%
* Update the documentation file if needed

### Testing a hook
To test a hook you cant run the following commands:

* Run all the tests
    ```sh
    npm run test
    ```
* Run a specific test file
    ```sh
    npm run test -- src/collections/use-stack.hook.spec.ts
    ```

**As said before, your test file must contains all revelant test cases and have a coveray of 100%**

## Committing and Pushing
This project uses some linters and utilities to commit and push into the git repository.

### Commit messages
Commit messages have to be very clear and clean.<br />
Each commit messages are linted with [Conventional Commits](https://www.conventionalcommits.org/).

Commit messages consists of a header, a scope and a body.<br />
Headers and bodies are required but scopes are optionals.

You can see the list of headers [here](https://github.com/SugarDarius/react-use-algos/blob/master/.commitlintrc.json).

In addition, this project uses [semantic-release](https://github.com/semantic-release/semantic-release) so to make sure your commits appears into the [CHANGELOG.md](https://github.com/SugarDarius/react-use-algos/blob/master/CHANGELOG.md) file, use the conventionnal commits convention.

### Code Linters
Some linters are also use to lint the source code.<br />
Here it's only [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) which are used.

You can the configution files here
* [eslintrc](https://github.com/SugarDarius/react-use-algos/blob/master/.eslintrc.js)
* [prettierrc](https://github.com/SugarDarius/react-use-algos/blob/master/.prettierrc.json)

Feel free to update theses configurations files if you need to ! 😊

### Git hooks
This project is accompanied with some [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which they are enabled by default when you install your dependencies.<br />
The git hooks are defined [here](https://github.com/SugarDarius/react-use-algos/blob/master/.huskyrc.json) with the help of [Husky](https://github.com/typicode/husky).

Here are the list of the fit hooks defined:
* `pre-commit`: will run the code linters
* `commit-msg`: will run the Conventional Commits linter
* `pre-push`: will run all tests before pushing

### After pushing
After pushing you create and submir your pull request 🙏🏻

## Help
If you need help for submiting a pull request you can use this [guide](https://github.com/firstcontributions/first-contributions) from [GitHub](https://github.com/) !