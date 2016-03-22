window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("category");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  var e = document.getElementById("categories-list");
  var selectedlist = e.options[e.selectedIndex].value;

document.getElementById("categories-list").addEventListener("change", reload);

  function reload(){

    selectCat();
    chosenCategory = selectedlist;

    if(chosenCategory== "baseball teams"){
      word = play.categories[0][Math.floor(Math.random()* play.categories[0].length)]
    }else if(chosenCategory== "ice cream flavors"){
      word = play.categories[1][Math.floor(Math.random()* play.categories[1].length)]
    }else if(chosenCategory== "foreign cities"){
      word = play.categories[2][Math.floor(Math.random()* play.categories[2].length)]
    }

    word = word.replace(/\s/g, "-");
    console.log("reload runs");
    console.log(word);
    result();
  }



//reload ();

  // Select Category
  var selectCat = function () {
      selectedlist = e.options[e.selectedIndex].value;
    if (selectedlist === "baseball teams") {
      categoryName.innerHTML = "The Chosen Category Is Baseball Teams";
      word=play.categories[0]
    } else if (selectedlist === "ice cream flavors") {
      categoryName.innerHTML = "The Chosen Category Is Ice Cream Flavors";
      word=play.categories[1]
    } else if (selectedlist === "foreign cities") {
      categoryName.innerHTML = "The Chosen Category Is Foreign Cities";
      word=play.categories[2]
    }
    else {categoryName.innerHTML ="this is an error";}
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    wordHolder.innerHTML = '';
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      correct.appendChild(guess);
      wordHolder.appendChild(correct);

    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }


   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  var play =  {
    categories : [
        ["padres", "dodgers", "red sox", "cardinals", "marlins", "white sox", "diamond backs","yankees"],
        ["cookies and cream", "rainbow sherbet", "rocky road", "neopolitan", "pistachio", "chocolate chip", "black cherry", "mint chocolate"],
        ["abu dhabi", "milan", "madrid", "amsterdam", "london", "bangkok", "dubai", "barcelona"]
    ]
  }
    chosenCategory = selectedlist;
    console.log("chosen category: " + chosenCategory);
    //
    if(chosenCategory== "baseball teams"){
      word = play.categories[0][Math.floor(Math.random()* play.categories[0].length)]
      console.log("word:" + word);
    }else if(chosenCategory== "ice cream flavors"){
      word = play.categories[1][Math.floor(Math.random()* play.categories[1].length)]
    }else if(chosenCategory== "foreign cities"){
      word = play.categories[2][Math.floor(Math.random()* play.categories[2].length)]
    }

    //
    // chosenCategory = play.categories[Math.floor(Math.random() * play.categories.length)];
    // word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    buttons();
    console.log(word);

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    comments();
    selectCat();
    result();
    canvas();



if(e.options[e.selectedIndex].value ="baseball teams"){
    chosenCategory =0
    word= play.categories[chosenCategory];

}else if(e.options[e.selectedIndex].value ="ice cream flavors"){
    chosenCategory =1
    word= play.categories[chosenCategory];

}


  // Hint

    hint.onclick = function() {

      hints = [
        ["San Diego", "Los Angeles", "Boston", "St. Louis", "Miami", "Chicago", "Phoenix", "New York City"],
        ["includes cookies", "includes a rainbow", "includes marshmellows", "includes three flavors", "includes nuts", "includes chips of chocolate", "includes a fruit", "includes a green leaf"],
        ["capital of the United Arab Emirates", "the fashion capital of the world, is home to the headquaters of many high fashion brands", "is the most visited city in Spain, it is also the third most populated city in Europe.", "Netherlands capital", "Czech Republic capital"]
    ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

//

reload();
}
