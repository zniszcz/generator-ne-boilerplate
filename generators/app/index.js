
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    writing() {

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

        this.files.forEach((path) => this.fs.copy(
            this.templatePath(path),
            this.destinationPath(path))
        );
    }

    install() {
        this.npmInstall();
    }
};
