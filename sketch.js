var mySong, frequency, myImg1, myImg2, myImg3, myImg4;

function preload() {
 mySong = loadSound('./sound/X________X_-_14_-_My_Terranean_Home.mp3');
 myImg1 = loadImage('./image/punk1.png');
 myImg2 = loadImage('./image/punk2.png');
 myImg3 = loadImage('./image/punk3.png');
 myImg4 = loadImage('./image/punk4.png');
}
function setup() {
  createCanvas(500,500);
  
  mySong.play();
  
  analyser=new p5.Amplitude();
  analyser.setInput(mySong);

  
  frequency = new p5.FFT();
  frequency.setInput(mySong);
}

function draw() {
  background(85,104,50);
  rectMode(CENTER);
  
 
  
  //CANZONE
  if(mySong.isPlaying() === true) {
    
    noFill();
    stroke(255);
    strokeWeight(3);
    //rect(width/15,height/15,volume*random(100,300),volume*random(300,500));
    //translate(width/2,height/2);
    cerchi();
    freqGen();
    
  } else {}
  
  
  //TONDI
  push();
  for(var x = 5; x < 243; x+=25)
  {
    for(var y = 5; y < 243; y+=25)
    { 
      
      if (mouseX<=width/2 && mouseY<=height/2) {
        var diametro = analyser.getLevel();
  fill(83,27,0);
  noStroke();
      } else {
      }
      ellipse(x, y, diametro*80);
    }
  }
  pop();
  
  push();
  for(var x = 257; x < 500; x+=25)
  {
    for(var y = 257; y < 500; y+=25)
    { 
      
      if (mouseX>=width/2 && mouseY>=height/2) {
        var diametro = analyser.getLevel();
  fill(1,50,32);
  noStroke();
      }
      ellipse(x, y, diametro*90);
    }
  }
  pop();
  
push();
  for(var x = 257; x < 500; x+=25)
  {
    for(var y = 7; y < 243; y+=25)
    { 
      var volume= analyser.getLevel();
      if (volume<=0.1) {
        var diametro = analyser.getLevel();
  fill(255);
  noStroke();
      } else {
      }
      ellipse(x, y, diametro*80);
    }
  }
  pop();
  
  push();
  for(var x = 7; x < 243; x+=25)
  {
    for(var y = 257; y < 500; y+=25)
    { 
      var volume= analyser.getLevel();
      if (volume<=0.2) {
        var diametro = analyser.getLevel();
  fill(244,196,48);
  noStroke();
      } else {
      }
      ellipse(x, y, diametro*80);
    }
  }
  pop();
  
  /*push();
  var volume = analyser.getLevel();
  
  if (volume<=0.3) {
    
  for(var x = 250; x < 500; x+=25)
  {
    for(var y = 5; y < 250; y+=25)
    {   }
      var diametro = analyser.getLevel();
      fill(1,50,32);
      noStroke();
      ellipse(x, y, diametro*90);
    }
  } else {}
  pop();
  */
  
 //IMMAGINI
 /*myImage.filter("gray")
myImage.filter("threshold",0.5)
myImage.filter("posterize",3)
myImage.filter("invert")*/
  push();
  if(mouseX<=243 && mouseY<=243) {
  image(myImg3, mouseX, mouseY,152,254);
  }
  else if (mouseX>=257 && mouseY>=257) {
  image(myImg4, mouseX, mouseY,152,254);
  } 
  else if (mouseX<=243 && mouseY>=257) {
  image(myImg3, mouseX, mouseY,152/1.5,254/1.5);
  }
  else{
  image(myImg4, mouseX, mouseY,152/1.5,254/1.5);
  }
  
  pop();

}

function cerchi() {
  
  //var volume=analyser.getLevel();
  //triangle(100,150,150,100,volume*random(600,800),volume*random(800,900));
  for(var c=5; c<=500; c+=30) {
    for(var d=25; d<=500; d+=30){
      fill(244,196,48,70);
      noStroke();
      ellipse(c,d,10);
    }
  }
}

function freqGen() {
  var spectrum = frequency.analyze();
  var y=random(10,100);

  noFill();
  push();
  translate(0,y/8)
  stroke(255,153,51);
  strokeWeight(6);
    
    beginShape();
    for (v = 0; v < spectrum.length; v += 20) {
      vertex(v, map(spectrum[v], 0, 255, width * 0.666, width * 0.25));
    }
    endShape();
    pop();
  }


