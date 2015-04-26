/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('esri-widget generator', function() {

  var expectedFiles;

  before(function() {
    expectedFiles = [
      // add files you expect to exist here.
      'app/test.js',
      'app/templates/test.html',
      'app/tests/tests.css',
      'app/tests/testTest.html',
      'app/tests/spec/testSpec.js',
      'app/resources/test.css'
    ];
  });

  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('esri-widget:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files ', function(done) {

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'widgetsInTemplate': true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expectedFiles);
      done();
    });
  });

});
