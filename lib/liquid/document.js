// Generated by CoffeeScript 1.10.0
(function() {
  var Liquid,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Liquid = require("../liquid");

  module.exports = Liquid.Document = (function(superClass) {
    extend(Document, superClass);

    function Document(template) {
      this.template = template;
    }

    Document.prototype.blockDelimiter = function() {
      return [];
    };

    Document.prototype.assertMissingDelimitation = function() {};

    return Document;

  })(Liquid.Block);

}).call(this);

//# sourceMappingURL=document.js.map
