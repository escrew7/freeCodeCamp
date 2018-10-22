// game must be run in CodePen full page mode, for some reason does not work in editor mode

$(document).ready(function() {
  const winner = [/[a,b,c]/g, /[d,e,f]/g, /[g,h,i]/g, /[a,d,g]/g, /[b,e,h]/g, /[c,f,i]/g, /[a,e,i]/g, /[g,e,c]/g];
  let board = ["a",'b','c','d','e', 'f', 'g', 'h', 'i']
  let Player1 = {'name': 'Player 1', 'board' : '', 'class' : 'xs'}
  let Player2 = {'name': 'Player 2', 'board' : '', 'class' : 'os'}
  let currentPlayer = Player1
  let game = "Playing"

  function winCheck(moves, name) {
    const winner = [/[a,b,c]/g, /[d,e,f]/g, /[g,h,i]/g, /[a,d,g]/g, /[b,e,h]/g, /[c,f,i]/g, /[a,e,i]/g, /[g,e,c]/g];
    winner.forEach((x) => {
      won = moves.match(x)
      if(won !== null){
        if(won.length == 3){
          game = "Finished"
        }
      }
    })
  }

  function compMove(board) {
      let move = board[Math.floor(Math.random() * board.length)]
      var $button = $(`.${move}`);
      $button.addClass(currentPlayer.class)
      currentPlayer.board += $button.val()
      winCheck(currentPlayer.board, currentPlayer.name)
      if(game == "Finished") {
        $(".dispWinner").text(`You lost!`)
      }
      var index = board.indexOf($button.val());
      if (index > -1) {
        board.splice(index, 1);
      }
  }

  $(".square").click(function(){
    var $button = $(this);
    $button.addClass(currentPlayer.class)
    currentPlayer.board += $button.val()
    winCheck(currentPlayer.board, currentPlayer.name)
    console.log(board.length)
    if(game == "Finished") {
      $(".dispWinner").text(`You won!!`);

    } else if (board.length == 1){
        $(".dispWinner").text(`Its a draw!`)
    } else {
       var index = board.indexOf($button.val());
    if (index > -1) {
      board.splice(index, 1);
    }
    currentPlayer = Player2
    compMove(board)
    currentPlayer = Player1
    }
  })
  
  $('.select').click(function(){
    var $selector = $(this);
    if($selector.val() == 'xs'){
      Player1.class = 'xs';
      Player2.class = 'os'
    } else {
      Player1.class = 'os';
      Player2.class = 'xs'
    }
    $('.selection').fadeToggle(1000);
  });
})