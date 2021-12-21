var bgImg, bg
var gun, gunImg
var gamestate = 1
var bulletImg, bullet
var redbImg
function preload() {
  bgImg = loadImage("BG.jpg")
  gunImg = loadImage("gun.png")
  bulletImg = loadImage("bullet.png")
  redbImg = loadImage("redbubble.png")
}
function setup() {
  createCanvas(800, 800);
  bg = createSprite(50, width / 2, 100, height);
  bg.addImage(bgImg)

  gun = createSprite(100, height / 2, 50, 50)
  gun.addImage(gunImg)
  gun.scale = 0.2


}

function draw() {
  background("brown");
  fill("yellow")
  text(mouseX + ',' + mouseY, mouseX, mouseY)
  if (gamestate === 1) {
    rbubble()
    gun.y = mouseY
    if (keyDown("space")) {
      showBullet()
    }
  }

  drawSprites();
}

function showBullet() {
  bullet = createSprite(220, width / 2, 50, 20)
  bullet.addImage(bulletImg)
  bullet.scale = 0.12
  bullet.velocityX = 7
  bullet.y = gun.y - 35

}

function rbubble() {

  if (frameCount % 80 === 0) {
    var redBubble = createSprite(800, 300, 40, 40);
    redBubble.y = random(20, 780)
    redBubble.addImage(redbImg)
    redBubble.scale = 0.1
    redBubble.velocityX = -8
    redBubble.lifetime = 400
  }


}