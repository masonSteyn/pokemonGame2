  var titleSong;
  stage = "start";
  opponentHealthBar = 0
  yourHealthBar = 0
  function preload(){
    charmanderS = loadImage("charmander.png")
    bulbasaurF = loadImage("bulbasaur front.png")
    squirtleS = loadImage("squirtle side.png")
    pokemonLogo = loadImage("pokemon.png")
    titleSong = loadSound("Opening.mp3")
    fight = loadSound("pokemon battle.mp3")
    charmanderFight = loadImage("charmanderFight.png")
    bulbasaurFight = loadImage("bulbasaurFight.png")
    squirtleFight = loadImage("squirtleFight.png")
    fire = loadImage("fireA.png")
    AButton = loadImage("attack button.png")
    fullH = loadImage("full health.png")
    healthdown1 = loadImage("healthDown1.png")
    healthdown2 = loadImage("healthDown2.png")
    healthdown3 = loadImage("healthDown3.png")
    healthdown4 = loadImage("healthDown4.png")
    healthdown5 = loadImage("healthDown5.png")
    healthdown6 = loadImage("health0.png")
    Vine2 = loadImage("vine2.png")
    restart = loadImage("restart.png")

  }
  function setup(){
    
    createCanvas(1440,820)
    //restart button
    restartButton = createSprite(720,410)
    restartButton.addImage(restart)
    restartButton.visible = false

    //fire attack 15
    fireA = createSprite(400,400);
    fireA.addImage(fire)
    fireA.visible = false
    fireA.scale = 0.2

    //fire attack 20
    fireA2 = createSprite(400,400);
    fireA2.addImage(fire)
    fireA2.visible = false
    fireA2.scale = 0.2
    //opponent vine
    vineo = createSprite(1100,400)
    vineo.addImage(Vine2)
    vineo.scale = 0.4
    vineo.visible = false

    //attack buttons
    aButton = createSprite(830,700)
    aButton.addImage(AButton)
    aButton.visible = false

    aButton2 = createSprite(630,700)
    aButton2.addImage(AButton)
    aButton2.visible = false

    //player healthbar
    playerHealthBar = createSprite(400,200)
    playerHealthBar.addImage(fullH)
    playerHealthBar.visible = false 
    playerHealthBar.scale = 0.3

    //opponent healthbar
    healthBar2 = createSprite(1100,200)
    healthBar2.addImage(fullH)
    healthBar2.visible = false 
    healthBar2.scale = 0.3

  //logo
  logo = createSprite(720,384)
  logo.addImage(pokemonLogo)
  logo.scale = 0.5
  
//charmander
  charmander = createSprite(400,400)
  charmander.addImage(charmanderS)
  charmander.scale = 0.3
  charmander.visible = false
//squirtle
  squirtle = createSprite(1100,407)
  squirtle.addImage(squirtleS)
  squirtle.scale = 0.6
  squirtle.visible = false
//bulbasaur
  bulbasaur = createSprite(730,400)
  bulbasaur.addImage(bulbasaurF)
  bulbasaur.scale = 0.4
  bulbasaur.visible = false
  
  }
  function draw(){
    
    background("gray")
    drawSprites()
    
    if (stage == "start"){
    textSize(50)
    fill(255)
    text("press space",600,600)
    logo.visible = true
    restartButton.visible = false

    }

    if (stage == "start" && keyDown("space")){
      stage = "stage1"
      titleSong.play()
      logo.visible = false
    }

    if (stage == "stage1"){

//text  
  textAlign("center")
  textSize(50)
  fill(255)
  text("choose your starter pokemon",720,100)

//charmander
 charmander.visible = true
    text("if you choose",400,190)
    text("charmander",400,240)
    text("click 1",400,290 )

//bulbasaur
    bulbasaur.visible = true
    text("if you choose",720,190)
    text("bulbasaur",720,240)
    text("click 2",720,290 )

//squirtle
    squirtle.visible = true
    text("if you choose",1040,190)
    text("squirtle",1040,240)
    text("click 3",1040,290)
    }
    if(stage == "start"){





    }
      //opponent health bar
      if(opponentHealthBar === 0){
        healthBar2.addImage(fullH)
      }
      if(opponentHealthBar === 1){
        healthBar2.addImage(healthdown1)
      }
      if(opponentHealthBar === 2){
        healthBar2.addImage(healthdown2)
      }
    if(opponentHealthBar === 3){
      healthBar2.addImage(healthdown3)
    }
    if(opponentHealthBar === 4){
      healthBar2.addImage(healthdown4)
    }
    if(opponentHealthBar === 5){
      healthBar2.addImage(healthdown5)
    }
    if(opponentHealthBar >= 6){
      healthBar2.addImage(healthdown6)
      stage = "winEnd"
    }
  
    //your health bar
    if(yourHealthBar === 0){
      playerHealthBar.addImage(fullH)
    }
    if(yourHealthBar === 1){
      playerHealthBar.addImage(healthdown1)
    }
    if(yourHealthBar === 2){
      playerHealthBar.addImage(healthdown2)
    }
    if(yourHealthBar === 3){
      playerHealthBar.addImage(healthdown3)
  }
  if(yourHealthBar === 4){
    playerHealthBar.addImage(healthdown4)
  }
  if(yourHealthBar === 5){
    playerHealthBar.addImage(healthdown5)
  }
  if(yourHealthBar > 6){
    playerHealthBar.addImage(healthdown6)
    stage = "loseEnd"
  }


//charmander stuff
    if (stage == "stage1" && keyDown("1")){
      stage = "stagec" 
    }

    if(stage == "stagec"){
      textAlign("center")
      textSize(50)
      fill(255)
      text("i choose you",400,240)

      textSize(50)
      fill(255)
      textAlign("center")
      text("press space to battle",720,600)
      squirtle.visible = false
      bulbasaur.visible = false
      titleSong.stop()
    }
      if (stage == "stagec" && keyDown("space")){
        stage = "stagecBattle"
        charmander.addImage(charmanderFight)
        fight.loop()
      }
      if (stage == "stagecBattle"){
      bulbasaur.visible = true
      bulbasaur.x = 1040
      playerHealthBar.visible = true
      healthBar2.visible = true

      textSize(90)
      fill(255)
      textAlign("center")
      text("VS",730,200)

      textSize(30)
    fill(0)
    textAlign("center")
    text("ember",630,710)

    textSize(30)
    fill(0)
    textAlign("center")
    text("scratch",830,710)
      aButton.visible = true
      aButton2.visible = true
      }
      //attack 1
      if(mouseX<700 && mouseX>550 && mouseY < 720 && mouseY > 680 && stage === "stagecBattle"){
        textSize(30)
        fill(0)
        textAlign("center")
        text("10 damage",630,660)
        
      }
      
      if(mouseX<700 && mouseX>550 && mouseY < 720 && mouseY > 680 && stage === "stagecBattle" && mouseDown()){
        stage = "stageCAttack"
        
      }
      if (stage == "stageCAttack"){
        fireA.visible = true
        fireA.velocityX = 10
        aButton.visible = false
        aButton2.visible = false
      }
      if(fireA.isTouching(bulbasaur)){
         fireA.velocityX = 0;
         fireA.visible = false;
         fireA.x = 300;
          opponentHealthBar += 1;
          stage = "stageCBAttack";

      }
      
      //attack 2
      if(mouseX<900 && mouseX>730 && mouseY < 720 && mouseY > 680 && stage === "stagecBattle"){
        textSize(30)
        fill(0)
        textAlign("center")
        text("20 damage + 10 recoil",830,660)
        
      }
      if(mouseX<900 && mouseX>730 && mouseY < 720 && mouseY > 680 && stage === "stagecBattle" && mouseDown()){
        stage = "stageCAttack2"
        
      }
      if (stage == "stageCAttack2"){
        fireA2.visible = true
        fireA2.velocityX = 10
        aButton.visible = false
        aButton2.visible = false
      }
      if(fireA2.isTouching(bulbasaur)){
        fireA2.velocityX = 0;
        fireA2.visible = false;
        fireA2.x = 300;
         opponentHealthBar += 2;
         yourHealthBar += 1;
         stage = "stageCBAttack";
     }
     if(stage == "stageCBAttack" && opponentHealthBar <= 5){
        vineo.visible = true
        vineo.velocityX = -10
      }
      if(vineo.isTouching(charmander)){
        vineo.velocityX = 0;
        vineo.visible = false;
        vineo.x = 1100;
        yourHealthBar += 1;
         stage = "stagecBattle";
     }
     
      
      
    //bulbasaur stuff
    if (stage == "stage1" && keyDown("2")){
      stage = "stageb"
    }
      if(stage == "stageb"){
      textAlign("center")
      textSize(50)
      fill(255)
      text("i choose you",720,240)

      textSize(50)
      fill(255)
      textAlign("center")
      text("press space to battle",720,600)

      squirtle.visible = false
      charmander.visible = false
      titleSong.stop()
    }
    if (stage == "stageb" && keyDown("space")){
      stage = "stagebBattle"
      bulbasaur.addImage(bulbasaurFight)
      fight.loop()
      
    }
    if (stage == "stagebBattle"){
    bulbasaur.visible = true
    squirtle.visible = true
    bulbasaur.x = 400
      textSize(90)
      fill(255)
      textAlign("center")
      text("VS",730,200)

      textSize(30)
    fill(0)
    textAlign("center")
    text("vine whip",630,710)

    textSize(30)
    fill(0)
    textAlign("center")
    text("seed bomb",830,710)

      aButton.visible = true
      aButton2.visible = true

    }

    if(mouseX<700 && mouseX>550 && mouseY < 720 && mouseY > 680 && stage === "stagebBattle"){
      textSize(30)
      fill(0)
      textAlign("center")
      text("15 damage",630,660)
      
    }

    if(mouseX<900 && mouseX>730 && mouseY < 720 && mouseY > 680 && stage === "stagebBattle"){
      textSize(30)
      fill(0)
      textAlign("center")
      text("20 damage + 10 recoil",830,660)
      
    }
// squirtle stuff
    if (stage == "stage1" && keyDown("3")){
      stage = "stageS"
    }
    if(stage == "stageS"){
      textAlign("center")
      textSize(50)
      fill(255)
      text("i choose you",1040,240)
      textSize(50)
      fill(255)
      textAlign("center")
      text("press space to battle",720,600)
      bulbasaur.visible = false
      charmander.visible = false
      titleSong.stop()
      
    }

    if (stage == "stageS" && keyDown("space")){
      stage = "stageSBattle"
      squirtle.addImage(squirtleFight)
      fight.loop()
    }
    if (stage == "stageSBattle"){
    charmander.visible = true
    charmander.x = 1040
    squirtle.x = 400
    textSize(90)
    fill(255)
    textAlign("center")
    text("VS",730,200)

    textSize(30)
    fill(0)
    textAlign("center")
    text("bubble",630,710)

    textSize(30)
    fill(0)
    textAlign("center")
    text("splash",830,710)

    aButton2.visible = true
    aButton.visible = true
    }
    if (stage == "stageSBattle" && keyDown("space")){
      
    }

    if(mouseX<700 && mouseX>550 && mouseY < 720 && mouseY > 680 && stage === "stageSBattle"){
      textSize(30)
      fill(0)
      textAlign("center")
      text("20 damage + 10 recoil",630,660)
      
    }

    if(mouseX<900 && mouseX>730 && mouseY < 720 && mouseY > 680 && stage === "stageSBattle"){
      textSize(30)
      fill(0)
      textAlign("center")
      text("15 damage",830,660)
      
    }
    //stage End
    if(stage === "winEnd"){
      charmander.visible = false
      bulbasaur.visible = false
      aButton.visible = false
      aButton2.visible = false
      playerHealthBar.visible = false
      healthBar2.visible = false
      textSize(90)
      fill(255)
      textAlign("center")
      text("you win",720,300)
      restartButton.visible = true
      fight.stop()
      }
    if(mousePressedOver(restartButton) && stage === "winEnd"){
      stage = "start"
      restartButton.visible = false
      
    }
   //if(mouseX<730 && mouseX>530 && mouseY < 490 && mouseY > 400 && stage === "winEnd" && mouseDown()){
   // stage = "start"
    
  //}




   }
