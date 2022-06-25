var bg1, bg2, gif, gifA, form, system, code, security;
var theme, bubble, error, correct, win, jump;
var gameState = 0, score = 0;

function preload(){
  bg1 = loadImage("Images/bg/cave.jpg");
  bg2 = loadImage("Images/bg/treasure.jpg");

  gifA = loadAnimation(
    "Images/gif/0.png",
    "Images/gif/1.png",
    "Images/gif/2.png",
    "Images/gif/3.png",
    "Images/gif/4.png",
    "Images/gif/5.png",
    "Images/gif/6.png",
    "Images/gif/7.png"
  );

  correct = loadSound("Music/correct.mp3");
  bubble = loadSound("Music/bubble.mp3");
  theme = loadSound("./Music/theme.mp3");
  error = loadSound("Music/error.mp3");
  jump = loadSound("Music/jump.mp3");
  win = loadSound("Music/win.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  gif = createSprite(width/2-150, height/2-80);
  gif.addAnimation("gif", gifA);
  gif.visible = false;
  gif.frameDelay = 4;

  security = new Security();
  system = new System();

  correct.setVolume(0.2);
  theme.setVolume(0.4);
  win.setVolume(0.2);
  theme.loop();
}

function draw(){
  background(bg1);
  clues();
  security.display();

  if(gameState === 0){
    menu();
  }

  texts();
  drawSprites();
}

function menu(){

  swal({
    title: `CAVERNA DO TESOURO`,
    text: "André é um aventureiro que achou uma caverna cheia de tesouros, mas para entrar, tinha que responder corretamente 3 perguntas sobre programação, feitas pelo Guardião da Caverna! Você pode ajudar André com seus conhecimentos do mundo dos códigos?",
    imageUrl:
      "https://pt.seaicons.com/wp-content/uploads/2016/03/treasure-icon.png",
    imageSize: "200x200",
    confirmButtonText: "JOGAR",
  });

  gameState = 1;
  bubble.play();
}

function texts(){
  textSize(30);
  text("DESEMBARALHE AS PALAVRAS:", width/2-220, height-height+40);

  textSize(20);
  fill("white");
  text("PONTUAÇÃO: " + score + "/3", width/2-80, height-30);

  if(score === 3) {
    clear();
    background(bg2);

    gif.visible = true;

    textSize(40);
    fill("white");
    strokeWeight(3);
    stroke("yellow");
    textFont("Geórgian");
    text("TESOURO DESBLOQUEADO", width/2-370, height-height+70);
  }
}