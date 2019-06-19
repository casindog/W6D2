const View = require("./ttt-view.js");
const Game = require("./game.js");

// ready style
$(() => {
  let y = new Game();
  let $ttt = $('.ttt');
  let x = new View(y, $ttt);
  });
