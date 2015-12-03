
var View = function (game, $board) {
  this.game = game;
  this.$board = $board;
  this.setupBoard();
  this.bindEvents();
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
    //console.log(this.game.board);
    console.log("square empty", this.game.board.isEmptyPos(pos));

    if (!this.game.board.isEmptyPos(pos)) {
      alert("Invalid Move!");
    } else {
        this.game.playMove(pos);

      if (this.game.currentPlayer === "x" ) {
        $square.addClass("mark-x");
        $square.text("X");
      } else {
        $square.addClass("mark-o");
        $square.text("O");
      }

    }

    if (this.game.isOver() && this.game.winner()) {

      var $message = $("<div> Winner is " + this.game.currentPlayer + "</div>");
      $message.addClass("win-message");

      this.$board.append($message);
      this.$board.off("mousedown", ".square");
    } else if (this.game.isOver()) {
      var message = "Tie game!";

      this.$board.append(message);
      this.$board.off("mousedown", ".square");
    }




};

View.prototype.setupBoard = function () {
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
  this.$board.append($grid);
};

module.exports = View;
