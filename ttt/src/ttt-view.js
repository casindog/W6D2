class View {
  constructor(game, $ttt) {
    this.game = game;
    this.$ttt = $ttt;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$ttt.on("click", "#square", (event => {
      const $square = $(event.target);
      this.makeMove($square);
   
    }));
    
  }

  makeMove($square) {
    $square.attr("id", this.game.currentPlayer);
    let pos = $square.data("pos");
    // debugger
    this.game.playMove(pos);
    $square.html(this.game.currentPlayer);
    if(this.game.winner()) {
      let name = "";
      if (this.game.winner() === "x") {
        name = "o";
      } else {
        name = "x";
      }

      let win = (`${name} wins the game!!`);
      alert (win);
    };
  }

  setupBoard() {
    const $grid = $('<ul>');
    // $grid.attr("display","flex");
    // $grid.attr("flex-wrap","wrap");
    // $grid.attr("display","flex");
    $grid.addClass("board");
    let row = -1;
    for(let i=0;i < 9;i++ ) {      
      let $newLi = $("<li></li>");
      if (i % 3 === 0) row += 1;
      $newLi.attr("id", "square");
      $newLi.data('pos',[row, i%3]);

      $grid.append($newLi);
      
    }
      this.$ttt.append($grid);
  }
}

module.exports = View;
