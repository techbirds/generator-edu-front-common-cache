'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the stellar ' +
        chalk.red('edu-front-common-component') +
        ' generator!'
      )
    );

    var prompts = [{
        type: 'input',
        name: 'moduleName',
        message: 'Please input module name (module):',
        default: 'module'
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Please input cache name (cache):',
        default: 'cache'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author (edu):',
        default: 'edu'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectName = 'cache-' + props.moduleName
    }.bind(this));
  }

  defaults() {

    // mkdirp projectName
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

    // mkdirp dynamic dir
    // mkdirp(path.join('res', this.props.projectName));
    // mkdirp(path.join('src', this.props.componentName));
    // mkdirp(path.join('tutorials', this.props.componentName));
    // mkdirp(path.join('test', this.props.componentName))

  }

  writing() {

    const data = {
      module_name: this.props.moduleName,
      component_name: this.props.componentName,
      project_author: this.props.projectAuthor
    }

    this.fs.copyTpl(
      this.templatePath('./src/demo/*'),
      this.destinationPath('./src/' + this.props.componentName), data
    );

    this.fs.copyTpl(
      this.templatePath('./tutorials/demo'),
      this.destinationPath('./tutorials/' + this.props.componentName + '/'), data
    )

    this.fs.copyTpl(
      this.templatePath('./test/*'),
      this.destinationPath('./test/'), data
    )

    this.fs.copyTpl(
      this.templatePath('./test/demo/*'),
      this.destinationPath('./test/' + this.props.componentName + '/'), data
    )

    // copy config
    this.fs.copyTpl(
      this.templatePath('./*'),
      this.destinationPath('./'), data, {}, {
        globOptions: {
          dot: true
        }
      }
    )
  }

  install() {
    this.installDependencies();
  }
};
