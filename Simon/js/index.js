$(document).ready(function() {
  let seq = [];
  let count = 0;
  let userSeq = [];
  let userCount = 0;
  const board = ["a", "b", "c", "d"];
  let strict = false;
  const buttA = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
  );
  const buttB = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
  );
  const buttC = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
  );
  const buttD = new Audio(
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  );

  function classAdd(moveClass) {
    $(`.${moveClass}`).addClass("moveNum");
    switch (moveClass) {
      case "a":
        buttA.play();
        break;
      case "b":
        buttB.play();
        break;
      case "c":
        buttC.play();
        break;
      case "d":
        buttA.play();
        break;
    }
    console.log(moveClass)
  }

  function classRemove(moveClass) {
    $(`.${moveClass}`).removeClass("moveNum");
  }

  function runDemo() {
    let seqCount = 0;
    seq.forEach(x => {
      let moveClass = x;
      setTimeout(function() {
        classAdd(moveClass);
      }, seqCount * 1000);
      setTimeout(function() {
        classRemove(moveClass);
      }, (seqCount + 1) * 1000);
      seqCount++;
    });
  }

  $(".strict").click(function() {
    strict = !strict;
    if (strict) {
      $(".strict").addClass("strictClass");
    } else {
      $(".strict").removeClass("strictClass");
    }
  });

  function genMove() {
    let move = Math.floor(Math.random() * 4);
    count += 1;
    seq.push(board[move]);
    $(".dispWinner").text(seq);
    $(".move").text(count);
    runDemo();
  }

  $(".userI").click(function() {
    let $current = $(this);
    userSeq.push(board[$current.val()]);
    if (userSeq[userCount] != seq[userCount] && strict) {
      seq = [];
      count = 0;
      userSeq = [];
      userCount = 0;
      genMove();
    } else if (userSeq[userCount] != seq[userCount]) {
      $(".dispWinner").text("wrong");
      userCount = 0;
      userSeq = [];
      console.log("issue");
      return setTimeout(function() {
        runDemo();
      }, 1000);
    } else if (userSeq[userCount] == seq[userCount]) {
      $(".dispWinner").text("bingo");
      userCount++;
      console.log(seq);
      console.log(userSeq);
      console.log(userCount);
    }
    if (userCount == 20) {
      $(".move").text("You Win!");
    } else if (count == userCount) {
      userSeq = [];
      userCount = 0;
      setTimeout(function() {
        genMove();
      }, 1000);
    }
  });

  $(".begin").click(function() {
    seq = [];
    count = 0;
    genMove();
  });

  $(".a").click(function() {
    buttA.play();
    $(".a").addClass("moveNum");
    setTimeout(function() {
      $(".a").removeClass("moveNum");
    }, 500);
  });

  $(".b").click(function() {
    buttB.play();
    $(".b").addClass("moveNum");
    setTimeout(function() {
      $(".b").removeClass("moveNum");
    }, 500);
  });

  $(".c").click(function() {
    buttC.play();
    $(".c").addClass("moveNum");
    setTimeout(function() {
      $(".c").removeClass("moveNum");
    }, 500);
  });

  $(".d").click(function() {
    buttD.play();
    $(".d").addClass("moveNum");
    setTimeout(function() {
      $(".d").removeClass("moveNum");
    }, 500);
  });
});