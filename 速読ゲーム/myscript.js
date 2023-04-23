// もう一度やる


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var myText = new function () {
  this.x = 0;
  this.y = canvas.height/2;
  this.xSpeed = 3;
  // this.fontSize = 48;
  this.image = new Image();
  this.image.src = "../学長2.jpg" 

  this.draw = function () {
    // var sentence = "おはようございます";

    this.x += this.xSpeed;  

    if(this.x > canvas.width + this.image.width)
    {
      this.x =0;
    }


    // ctx.fillStyle = "#000";
    // ctx.font = "48px serif";
    // ctx.textAlign ="right";
    // ctx.fillText(this.sentence, this.x, this.y);
    ctx.drawImage(this.image, this.x, this.y);
  }
};



function loop() {
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  myText.draw();
  requestAnimationFrame(loop);
  
}

var sentences = ["こんにちは", "おはよう", "こんばんは"];


var myButton = document.getElementById("myButton");
var slowButton = document.getElementById("slowButton");
slowButton.style.display ='block';

var prev_index = 0;
var randomIndex = 0;



  myButton.addEventListener("click",function () {
  var randomIndex = Math.floor(Math.random() * sentences.length);
  this.value ="問題を変える"
  myText.xSpeed = 100;
  while (prev_index == randomIndex) {
    randomIndex = Math.floor(Mah.random() * sentences.length);
  }

  myText.sentence = sentences[randomIndex];

  prev_index = randomIndex;
});

slowButton.addEventListener("click",function () {
  myText.xSpeed = 1;
});

loop();