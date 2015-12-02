var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');
var _ = require('underscore');

$(function () {
  // Your code here
  var game = new Game();
  var $board = $("figure.ttt");
  var view = new View(game, $board);

  var setupBoard = function () {
    var $grid =  $("<ul></ul>");
    $grid.addClass("grid");
    var i = 0;

    while(i<3){
      var j = 0;
      while(j<3){
        $grid.append($("<li></li>").addClass("square").data("data-pos", [i,j]));
        console.log(i, j);
        j++;
      }
      i++;
    }
    $board.append($grid);
  };

  var bindEvents = function (){

  };


  view.bindEvents();
  setupBoard();



});
