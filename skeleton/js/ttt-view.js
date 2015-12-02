
var View = function (game, $board) {
  this.game = game;
  this.$board = $board;
};

View.prototype.bindEvents = function () {
  var game = this.game;
  var view = this;
  this.$board.on("mousedown", ".square", function(e){
    var mark = $(e.currentTarget);
    view.makeMove(mark);
  });

};

View.prototype.makeMove = function ($square) {
    var pos = $square.data("data-pos");
    this.game.playMove(pos);

    if (this.game.board.grid[pos[0]][pos[1]] === "x" ) {
      $square.addClass("mark-x");
      $square.text("X");
    } else {
      $square.addClass("mark-o");
      $square.text("O");
    }
};

View.prototype.setupBoard = function () {
};

module.exports = View;
