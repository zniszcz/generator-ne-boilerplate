
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
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
        name: 'addSSR',
        message: 'Do you want SSR?',
        default: true,
        when: (answers) => answers.boilerplateType === 'Vue'
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
      {
        type: 'confirm',
        name: 'installDependencies',
        message: 'Do you want generator to install dependencies?',
        default: true
      },
    ];

    await this.prompt(questions)
      .then((answers) => {
        this.promptOptions = answers;
        this.log(this.promptOptions);
      });
  }

  writing() {
    if (this.promptOptions.boilerplateType === 'Static') {
      this.log('Build type: Static');
    } else {
      this.log('Build type: Vue ');
      if (this.promptOptions.addSSR) {
        this.log('Vue with SSR');
      } else {
        this.log('Vue spa mode');
      }
    }

    if (this.promptOptions.unitTests) {
      this.log('Add Jest');
    }
    if (this.promptOptions.editorconfig) {
      this.log('Add .editorconfig file');
    }
    if (this.promptOptions.mockServer) {
      this.log('Add mock server');
    }

    this.files = [
        './config/',
        './src/',
        './.babelrc',
        './.editorconfig',
        './.eslintrc',
        './.gitignore',
        './.nvmrc',
        './.sass-lint.yml',
        './package.json',
        './README.md',
    ];

    // this.files.forEach((path) => this.fs.copy(
    //     this.templatePath(path),
    //     this.destinationPath(path))
    // );
  }

  install() {
    if (this.promptOptions.installDependencies) {
      this.npmInstall();
    } else {
      this.log('To install your dependencies manually, run: npm install');
    }
  }
};
