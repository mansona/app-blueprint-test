var fleck = require('fleck');
const Blueprint = require('layer-gen/lib/models/blueprint');

var dasherize = fleck.dasherize;
var classify  = fleck.upperCamelize;

module.exports = class AppBlueprint extends Blueprint {
  description = 'The default blueprint for ember-cli projects.';

  locals(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = dasherize(rawName);
    var namespace = classify(rawName);

    return {
      name: name,
      modulePrefix: name,
      namespace: namespace,
      emberCLIVersion: '0.0.40'
    }
  }
};
