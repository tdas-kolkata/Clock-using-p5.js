

function setup(){
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
}

function draw(){
	//set the background
	background(0);
	translate(width/2,height/2);
	
	
	let hr = hour();
	let mn = minute();
	let sc = second();

	fill(255)
	noStroke();
	textSize(30);
	text(hr+":"+mn+":"+sc ,-55,0);

	rotate(-90);
	strokeWeight(18);
	stroke(200,20,50);  //red
	noFill();
	let end1 = map(sc,0,60,0,360);
	arc(0,0,400,400,0,end1)

	let end2 = map(mn*60+sc,0,3600,0,360);
	stroke(50,200,20);   //green
	arc(0,0,350,350,0,end2)

	let end3 = map(hr%12,0,12,0,360);
	stroke(20,50,200)   //blue
	arc(0,0,300,300,0,end3)

}