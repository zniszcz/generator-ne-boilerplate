
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ne-boilerplate:app', () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts({someAnswer: true});
    });

    it('should be purposeful test file in the future', () => {
        assert.file(['package.json']);
    });
});
