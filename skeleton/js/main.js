var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');
var _ = require('underscore');

$(function () {
  // Your code here
  var game = new Game();
  var $board = $("figure.ttt");
  var view = new View(game, $board);


});
