const path = require('path');

const shell = require('shelljs');
const chalk = require('chalk');

const pkg = require('../package.json');

const { cyan } = chalk;

process.stdout.write(cyan(`------------------------------------------------------------------------\r\n`));
process.stdout.write(cyan(`=> ${pkg.name} reinstall script\r\n`));
process.stdout.write(cyan(`------------------------------------------------------------------------\r\n`));

process.stdout.write(`\r\n`);

process.stdout.write(cyan(`=> Removing node_modules/ directory\r\n`));
shell.rm('-rf', path.resolve(__dirname, '../node_modules'));
process.stdout.write(cyan(`Done.\r\n`));

process.stdout.write(`\r\n`);

process.stdout.write(cyan(`=> Cleaning NPM cache\r\n`));
shell.exec('npm cache clean -f');
process.stdout.write(cyan(`Done.\r\n`));

process.stdout.write(cyan(`=> Renstalling node modules\r\n`));
shell.exec('npm install -d');
process.stdout.write(cyan(`Done.\r\n`));

process.stdout.write(`\r\n`);

process.stdout.write(cyan(`------------------------------------------------------------------------\r\n`));
process.stdout.write(cyan(`=> ${pkg.name} reinstall script done.\r\n`));
process.stdout.write(cyan(`------------------------------------------------------------------------\r\n`));

process.exit();