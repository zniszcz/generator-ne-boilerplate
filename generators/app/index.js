'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Jestem wywołaniem dodatkowego polecenia`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    this.log('This is a secret tool well use later');

    const files = [
      './config/',
      './src/',
      './.babelrc',
      './.editorconfig',
      './.eslintrc',
      './.gitignore',
      './.nvmrc',
      './.sass-lint.yml',
      './package.json',
      './README.md'
    ];

    files.forEach((path) => this.fs.copy(
      this.templatePath(path),
      this.destinationPath(path))
    );
  }

  install() {
    this.npmInstall();
  }
};
