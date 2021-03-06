'use strict';

var debug = require('debug')('changelog:setDefaults');

function setDefaults() {
  debug('setting defaults');
  this.options = {};
  this.cmd = {
    gitTag: 'git tag -l --sort=v:refname | tail -n1',
    gitRepoUrl: 'git config --get remote.origin.url',
    gitLog: null,
    gitLogNoTag: null
  };
  this.header = '<a name="%s">%s</a>\n# %s (%s)\n\n';
  this.emptyComponent = '$$';
  this.links = null;
  this.provider = null;
}

module.exports = setDefaults;
