var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("song.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  music_btn = createButton("音樂跳舞")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  mouse_btn = createButton("滑鼠跳動")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

  strokeWeight(8)
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()
}

function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false
}

function Speech_btn_pressed(){
  myRec.onResult = showResult;
	myRec.start();
}

function showResult()
	{
		if(myRec.resultValue==true) {
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="不要跳")
      {
        song.pause()
        mosueIsplay = true
        songIsplay = false
        }
		}
	}



function draw() {
push()
  textSize(50)
  fill(255,0,0)  
  text(result,1100,100);   
pop()

  rectMode(CENTER);
  background(220);
  noStroke()
  textSize(30); //字體大小
  push()
if(songIsplay)
{
  vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
}
else if(mouseIsPressed)
{
push();
  translate( width / 2, height / 2);
  fill(0);
  ellipse(80, -29, 50);
  ellipse(-80, -29, 50);
  fill(255);
  ellipse(75+map(mouseX/3,0,width,10,-25),-29+map(mouseY/3,0,height,10,-25),20)
  ellipse(-75+map(mouseX/3,0,width,10,-25),-29+map(mouseY/3,0,height,10,-25),20)
pop()
}

push();
  fill(242, 192, 13);
  translate( width / 2, height / 2);
  angleMode(DEGREES);
  rotate(6);
  ellipse(-95, 228, 30, 50);
  rotate(6);
  ellipse(-90, 243, 30, 50);
  rotate(6);
  ellipse(-85, 236, 30, 50);
pop();

push()
  translate(width/2,height/20)
  rectMode(CENTER)
  noStroke()
  fill(255)
  ellipse(-450,550,125,125)
  ellipse(-450,470,100,100)
  
  fill(89,58,0)
  ellipse(-450,585,10,10)
  ellipse(-450,565,10,10)
  ellipse(-450,545,10,10)
  ellipse(-435,455,5,5)
  ellipse(-465,455,5,5)

  fill(224,127,0)
  beginShape()
  vertex(-455,470)
  vertex(-445,480)
  vertex(-420,460)
  endShape(close)

  fill(163,9,7)
  noStroke()
  ellipse(-450,505,15)
  triangle(-450,505,-430,515,-430,495)
  triangle(-450,505,-470,515,-470,495)
pop()

push();
  fill(242, 192, 13);
  noStroke();
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(354);
  ellipse(95, 228, 30, 50);
  rotate(354);
  ellipse(90, 243, 30, 50);
  rotate(354);
  ellipse(85, 236, 30, 50);
pop();

push();
  translate(width / 2, height / 2);
  stroke(10);
  fill(0);
  ellipse(0, 0, 500, 500);
pop();

push();
  translate( width / 2, height / 2);
  noStroke();
  fill(255);
  ellipse(0, 100, 400, 250);
pop();

push();
  translate( width / 2, height / 2);
  noStroke();
  fill(255);
  ellipse(-100, -31, 160, 180);
  ellipse(100, -31, 160, 180);
pop();

push();
  translate( width / 2, height / 2);
  fill(0);
  ellipse(80, -29, 50);
  ellipse(-80, -29, 50);
  fill(255);
  ellipse(75,-29,20)
  ellipse(-75,-29,20)
pop();

push() 
  translate(width/2,height/2)  
  noStroke()
  fill(242,192,13)
  ellipse(0,-33,60,40)
pop()

push()
  translate(width/2,height/2) 
  noStroke()
  fill(235,162,162)
  ellipse(150,25,30,20)
  ellipse(-150,25,30,20)
  
  stroke(204,129,141)
  strokeWeight(2)
  line(-155,20,-160,35)
  line(-148,20,-153,35)
  line(-141,20,-146,35)
  line(155,20,160,35)
  line(148,20,153,35)
  line(141,20,146,35)
  pop()
}


