(function (root, factory) {
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // CommonJS support
    module.exports = factory(require("Mortar"), require('ko'));
  } else if (typeof define === 'function' && define.amd) {
    // Do AMD support
    define(["Mortar", "ko"], factory);
  } else {
    // Do browser support
    root.Mortar.koModel = factory(root.Mortar, root.ko);
  }
}(this, function(Mortar, ko) {
