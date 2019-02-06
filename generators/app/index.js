
const Generator = require('yeoman-generator');
const inquirer = require('inquirer');

module.exports = class extends Generator {

    prompting() {
      const questions = [
        {
          type: 'rawlist',
          name: 'boilerplateType',
          message: 'What would you like to generate?',
          choices: [
            'Static',
            'Vue'
          ],
          default: 'Static'
        },
        {
          type: 'confirm',
          name: 'vueMode',
          message: 'Do you want SSR?',
          default: true,
          when: function(answers) {

          }
        },
        {
          type: 'confirm',
          name: 'unitTests',
          message: 'Do you want unit tests (Jest)?',
          default: true
        },
        {
          type: 'confirm',
          name: 'editorconfig',
          message: 'Do you want editorconfig file?',
          default: true
        },
        {
          type: 'confirm',
          name: 'mockServer',
          message: 'Do you want mock server?',
          default: true
        },
      ];

      inquirer
        .prompt(questions)
        .then((answers) => {
          this.log(answers);
          // this.log(JSON.stringify(answers, null, '  '));
        });
    }

    writing() {
        // this.files = [
        //     './config/',
        //     './src/',
        //     './.babelrc',
        //     './.editorconfig',
        //     './.eslintrc',
        //     './.gitignore',
        //     './.nvmrc',
        //     './.sass-lint.yml',
        //     './package.json',
        //     './README.md',
        // ];

        // this.files.forEach((path) => this.fs.copy(
        //     this.templatePath(path),
        //     this.destinationPath(path))
        // );
    }

    install() {
        // this.npmInstall();
    }
};
