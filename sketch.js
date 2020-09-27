//creating all the variables
var bob,bobimg,trash1img,trash2img,trash3img,trash4img,bombimg,score,bombso,sound
//loading all the images 
function preload(){
bombso=loadSound("bomb.mp3")
sound=loadSound("Record_Scratch2 (1).mp3")
bobimg=loadImage("bob.png");
trash1img=loadImage("plastic_bag_PNG32.png");
trash2img=loadImage("garbage_2.jpg");
trash3img=loadImage("garbage_3.jpg");
trash4img=loadImage("garbage_4.jpg");
bombimg=loadImage("bomb.png");
}

function setup(){
   //creating canvas
    var canvas = createCanvas(windowWidth,windowHeight);
    //creating bob and adding his image
    bob=createSprite(width/2,height/2+200,10,30);
    bob.addImage(bobimg);
    bob.scale=0.1;
    //creating groups
    trash1gr=new Group()
    trash2gr=new Group()
    trash3gr=new Group()
    trash4gr=new Group()
    bombgr=new Group()

    score=0;
}
function draw(){
   //giving background colour
    background(0);
    //making bob move using keys
    /*if(keyWentDown(UP_ARROW)){
       bob.velocityY=-4
       bob.velocityX=0
    }
    if(keyWentDown(DOWN_ARROW)){
        bob.velocityY=4
        bob.velocityX=0
     }*/

     if(keyWentDown(RIGHT_ARROW)){
        bob.velocityX=6
        bob.velocityY=0
     }

     if(keyWentDown(LEFT_ARROW)){
        bob.velocityX=-6
        bob.velocityY=0
     }

     /*if(keyWentUp(UP_ARROW)){
      bob.velocityY=0
      bob.velocityX=0
   }
   if(keyWentUp(DOWN_ARROW)){
       bob.velocityY=0
       bob.velocityX=0
    }*/
   
    if(keyWentUp(RIGHT_ARROW)){
       bob.velocityX=0
       bob.velocityY=0
    }

    if(keyWentUp(LEFT_ARROW)){
       bob.velocityX=0 
       bob.velocityY=0
    }
    
    

    if(trash1gr.isTouching(bob)){
    trash1gr.destroyEach() 
    score++
    sound.play()
    } 
 
    if(trash2gr.isTouching(bob)){
      trash2gr.destroyEach() 
      score++
      sound.play()
      } 

   if(trash3gr.isTouching(bob)){
         trash3gr.destroyEach() 
         score++
         sound.play()
         } 

   if(trash4gr.isTouching(bob)){
    trash4gr.destroyEach() 
    score++
     sound.play()
    } 

    if(bombgr.isTouching(bob)){
      bombgr.destroyEach() 
      score=score-3
      bombso.play()
      } 
   
   textSize(20)  
   stroke("blue") 
   text("score:"+score,5,580)

  
//calling all the functions
    Trash1();
    Trash2(); 
    Trash3();
    Trash4();
    Bomb();
    drawSprites()
}

 function Trash1 (){
if(frameCount%290===0){
   trash1=createSprite(random(10,width),-10,50,50)
trash1.velocityY=2+3*score/20
trash1.addImage(trash1img);
trash1.scale=0.07
trash1.lifetime=300
trash1gr.add(trash1);

}

}

function Trash2(){
   if(frameCount%355===0){
      trash2=createSprite(random(10,width),-10,50,50)  
   trash2.velocityY=2+3*score/20
   trash2.addImage(trash2img);
   trash2.scale=0.07
   trash2.lifetime=400
   trash2gr.add(trash2);
   } 
}

function Trash3 (){
   if(frameCount%400===0){
      trash3=createSprite(random(10,width),-10,50,50)
   trash3.velocityY=2+3*score/20
   trash3.addImage(trash3img);
   trash3.scale=0.07
   trash3.lifetime=400
   trash3gr.add(trash3);
   }  
}

function Trash4 (){
   if(frameCount%450===0){
      trash4=createSprite(random(10,width),-10,50,50)
   trash4.velocityY=2+3*score/20
   trash4.addImage(trash4img);
   trash4.scale=0.2
   trash4.lifetime=400
   trash4gr.add(trash4);
   }  
}

function Bomb (){
   if(frameCount%250===0){
      bomb=createSprite(random(10,width),-10,50,50)
   bomb.velocityY=2+3*score/20
   bomb.addImage(bombimg);
   bomb.scale=0.05
   bomb.lifetime=400
   bombgr.add(bomb);
   }  
}