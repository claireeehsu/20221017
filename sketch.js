function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);//背景顏色
 }
 
 function draw() {
  
   rectMode(CENTER)//設定方框的座標點為中心點
   noFill()//不充滿顏色
   stroke(255)//線條顏色
   
   for(var i=0;i<int(width/(49));i++)
     {
   ellipse(25+(i*50),25,50)        
   rect(25+(i*50),25,50)
   ellipse(50+(i*50),50,20)
   
   ellipse(25+(i*50),25+50,50)        
   rect(25+(i*50),25+50,50)
   ellipse(50+(i*50),50+50,20)

   ellipse(25+(i*50),25+50*2,50)        
   rect(25+(i*50),25+50*2,50)
   ellipse(50+(i*50),50+50*2,20)

   ellipse(25+(i*50),25+50*3,50)        
   rect(25+(i*50),25+50*3,50)
   ellipse(50+(i*50),50+50*3,20)
     }
  }