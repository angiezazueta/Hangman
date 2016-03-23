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
      word = play.categories[chosenCategory][Math.floor(Math.random()* play.categories[chosenCategory].length)]
    }else if(chosenCategory== "ice cream flavors"){
      word = play.categories[chosenCategory][Math.floor(Math.random()* play.categories[chosenCategory].length)]
    }else if(chosenCategory== "foreign cities"){
      word = play.categories[chosenCategory][Math.floor(Math.random()* play.categories[chosenCategory].length)]
    }
    word = word.replace(/\s/g, "-");
    console.log("reload runs");
    console.log(word);
    init();
    letters.remove();
    buttons();
  }

  // Select Category
  var selectCat = function () {
      selectedlist = e.options[e.selectedIndex].value;
    if (selectedlist === "baseball teams") {
      categoryName.innerHTML = "The Chosen Category Is Baseball Teams";

    } else if (selectedlist === "ice cream flavors") {
      categoryName.innerHTML = "The Chosen Category Is Ice Cream Flavors";

    } else if (selectedlist === "foreign cities") {
      categoryName.innerHTML = "The Chosen Category Is Foreign Cities";

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
      console.log (guess)
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;

        }console.log (word[i], guess)
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


  // 3 categories
  var play =  {
    categories : {
        "baseball teams": ["padres", "dodgers", "red sox", "cardinals", "marlins", "white sox", "diamondbacks","yankees"],
        "ice cream flavors": ["cookies and cream", "rainbow sherbet", "rocky road", "neopolitan", "pistachio", "chocolate chip", "black cherry", "mint chocolate chip"],
        "foreign cities": ["abu dhabi", "milan", "madrid", "amsterdam", "london", "bangkok", "dubai", "barcelona"]
    }
  }
    chosenCategory = selectedlist;
    console.log("chosen category: " + chosenCategory);
      word = play.categories[chosenCategory][Math.floor(Math.random()* play.categories[chosenCategory].length)]
      console.log("word:" + word);
    word = word.replace(/\s/g, "-");
    buttons();
    console.log(word);


var init= function() {
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    comments();
    selectCat();
    canvas();
    result();
}
init()

  // Hint

    hint.onclick = function() {

      hints = {
        "baseball teams": ["one of the two Major League Baseball teams in California to originate from California", "originally from Brooklyn but moved to California in 1883", "they are members of the East division of the American League", "they compete in Major League Baseball as a member club of the National League Central division. The new Busch Stadium has been their home ballpark since 2006.", " one of only two MLB franchises to have never won a division title", "play their home games at U.S. Cellular Field", "are an American professional baseball franchise based in Phoenix, Arizona.", "one of two Major League clubs based in New York"],
        "ice cream flavors": [" based on flavoring from chocolate cookies", " contains a frozen mixture of sweetened fruit juice", "it is traditionally composed of chocolate ice cream, nuts, and marshmallows", "also known as harlequin ice cream", "it is often distinctively green in color", "includes dough in it", "name includes a color in it", " in most cases peppermint or spearmint flavoring is used"],
        "foreign cities": ["capital of the United Arab Emirates also distinguished by a skyline of ultramodern high-rises", "the fashion capital of the world", "is the most visited city in Spain", "is the capital and most populous city of the Netherlands", "is the capital and most populous city of England and the United Kingdom", "is the capital and most populous city of Thailand", "is the most populous city in the United Arab Emirates", "the cosmopolitan capital of Spain’s Catalonia region"]
    };

    var hintIndex = play.categories[chosenCategory].indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [chosenCategory][hintIndex];
  };

   // Reset
  document.getElementById('reset').onclick = function() {

    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    reload();
  }
}
