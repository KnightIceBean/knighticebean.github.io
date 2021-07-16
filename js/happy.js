birds = [];
let numBirds = 5;

class Bird {
   
	constructor(para_width,para_height,para_size,para_speed,para_hue) {
   
		this.pos = [para_width, para_height];//width, height: System variable that stores the width, height of the drawing canvas
		this.size = para_size;
		this.angle = 0;
		this.speed = para_speed;
		this.hue = para_hue;

		let p = [
			[0, 0],
			[random(.00, .10), random(.1, .4)], //beak
			[random(.10, .50), -random(.1, .2)], //head
			[random(.50, .80), random(.1, .3)], //body
			[random(.80, 1.0), -random(.2, .4)], //tail
			[1, 0],
			[random(.30, .40), 0], //wing base 1
			[random(.80, .90), 0], //wing base 2
			[random(.50, .65), -random(.4, .6)], //wing tip 1
			[random(.65, .70), -random(.4, .6)], //wing tip 2
		];

		this.triangles = [
			// idx, idx, idx, color, isWing
			[...p[0], ...p[1], ...p[2], randColor(this.hue), false], //head
			[...p[3], ...p[4], ...p[5], randColor(this.hue), false], //tail
			[...p[6], ...p[7], ...p[8], randColor(this.hue), true], //back wing
			[...p[0], ...p[2], ...p[3], randColor(this.hue), false], //body 1
			[...p[2], ...p[3], ...p[5], randColor(this.hue), false], //body 2
			[...p[6], ...p[7], ...p[9], randColor(this.hue), true], //front wing
		]
	}
	render() {   
		push();//the push() function saves the current drawing style settings and transformations, while pop() restores these settings.
		let p = this.pos;
		translate(...p);
		scale(this.size);
		strokeWeight(1 / this.size);

		p[0] += cos(this.angle + PI) * this.speed * 20;
		p[1] += sin(this.angle + PI) * this.speed * 20;
		if (p[0] < -this.size) p[0] += width + this.size;
		if (p[1] < -this.size / 2) p[1] += height + this.size / 2;

		let s = cos(frameCount * this.speed)
		rotate(this.angle);
		this.triangles.map(t => {
   
			fill(...(t[6]))
			if (t[7]) triangle(...t.slice(0, 5), t[5] * s);
			else triangle(...t);
		})

		pop();
	}
}

function randColor(base = 0, amt = .2) {
	return [(base + random(amt) - amt / 2) % 1, .2 + random(amt), .8 + random(amt)];
}

function setup() {
    //the setup() function is called once when the program starts.
	pixelDensity(1);//sets the pixel scaling for high pixel density displays. 
	createCanvas();//creates a canvas element in the document, and sets the dimensions of it in pixels. 
	colorMode(HSB, 1, 1, 1);
	windowResized();
}

function init() {
	birds = [];
	scale_width = width/1920*1.2;scale_height = width/1080*0.8;

	birds.push(new Bird(240*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(230*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(220*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(210*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(200*scale_width,300*scale_height,25,1/20,random()));

	birds.push(new Bird(260*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(300*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(380*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(420*scale_width,240*scale_height,25,1/20,random()));

	birds.push(new Bird(340*scale_width,150*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,360*scale_height,25,1/20,random()));


	birds.push(new Bird(260*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(300*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(380*scale_width,360*scale_height,25,1/20,random()));	
	birds.push(new Bird(420*scale_width,360*scale_height,25,1/20,random()));

	birds.push(new Bird(220*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(260*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(300*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(340*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(380*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(420*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(460*scale_width,480*scale_height,25,1/20,random()));


	birds.push(new Bird(560*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(560*scale_width,450*scale_height,25,1/20,random()));

	birds.push(new Bird(760*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,450*scale_height,25,1/20,random()));

	birds.push(new Bird(560*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(600*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(640*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(680*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(720*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,180*scale_height,25,1/20,random()));

	birds.push(new Bird(560*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(600*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(640*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(680*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(720*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(760*scale_width,450*scale_height,25,1/20,random()));

	birds.push(new Bird(600*scale_width,315*scale_height,25,1/20,random()));
	birds.push(new Bird(640*scale_width,315*scale_height,25,1/20,random()));
	birds.push(new Bird(680*scale_width,315*scale_height,25,1/20,random()));
	birds.push(new Bird(720*scale_width,315*scale_height,25,1/20,random()));


	birds.push(new Bird(920*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(910*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(900*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(980*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(990*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1000*scale_width,330*scale_height,25,1/20,random()));

	birds.push(new Bird(950*scale_width,150*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,480*scale_height,25,1/20,random()));
	birds.push(new Bird(950*scale_width,510*scale_height,25,1/20,random()));

	birds.push(new Bird(1030*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1070*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1150*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,210*scale_height,25,1/20,random()));

	birds.push(new Bird(1190*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,300*scale_height,25,1/20,random()));

	birds.push(new Bird(1230*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1150*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1070*scale_width,300*scale_height,25,1/20,random()));
	birds.push(new Bird(1030*scale_width,300*scale_height,25,1/20,random()));

	birds.push(new Bird(1110*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,240*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,270*scale_height,25,1/20,random()));
	birds.push(new Bird(1110*scale_width,300*scale_height,25,1/20,random()));

	birds.push(new Bird(1110*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(1095*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(1080*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(1065*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(1050*scale_width,450*scale_height,25,1/20,random()));
	birds.push(new Bird(1035*scale_width,480*scale_height,25,1/20,random()));

	birds.push(new Bird(1110*scale_width,330*scale_height,25,1/20,random()));
	birds.push(new Bird(1130*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(1150*scale_width,390*scale_height,25,1/20,random()));
	birds.push(new Bird(1170*scale_width,420*scale_height,25,1/20,random()));
	birds.push(new Bird(1190*scale_width,450*scale_height,25,1/20,random()));


	birds.push(new Bird(1520*scale_width,160*scale_height,25,1/20,random()));
	birds.push(new Bird(1490*scale_width,170*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,180*scale_height,25,1/20,random()));
	birds.push(new Bird(1430*scale_width,190*scale_height,25,1/20,random()));
	birds.push(new Bird(1400*scale_width,200*scale_height,25,1/20,random()));
	birds.push(new Bird(1370*scale_width,210*scale_height,25,1/20,random()));
	birds.push(new Bird(1340*scale_width,220*scale_height,25,1/20,random()));

	birds.push(new Bird(1340*scale_width,220*scale_height,25,1/20,random()));
	birds.push(new Bird(1340*scale_width,250*scale_height,25,1/20,random()));
	birds.push(new Bird(1340*scale_width,280*scale_height,25,1/20,random()));

	birds.push(new Bird(1370*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1400*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1430*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1490*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1520*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1550*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1580*scale_width,280*scale_height,25,1/20,random()));

	birds.push(new Bird(1460*scale_width,220*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,250*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,280*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,310*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,340*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,370*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,400*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,430*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,460*scale_height,25,1/20,random()));
	birds.push(new Bird(1460*scale_width,490*scale_height,25,1/20,random()));

	birds.push(new Bird(1460*scale_width,490*scale_height,25,1/20,random()));
	birds.push(new Bird(1430*scale_width,460*scale_height,25,1/20,random()));
	birds.push(new Bird(1400*scale_width,430*scale_height,25,1/20,random()));

	birds.push(new Bird(1400*scale_width,340*scale_height,25,1/20,random()));
	birds.push(new Bird(1370*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(1340*scale_width,380*scale_height,25,1/20,random()));

	birds.push(new Bird(1520*scale_width,340*scale_height,25,1/20,random()));
	birds.push(new Bird(1550*scale_width,360*scale_height,25,1/20,random()));
	birds.push(new Bird(1580*scale_width,380*scale_height,25,1/20,random()));		

	birds = birds.sort((a, b) => a.size - b.size);
}

function draw() {   
	background(0, .5);
	birds.map(b => b.render());
}

function mousePressed() {
    //The .mousePressed() function is called once after every time a mouse button is pressed over the element.
	windowResized();
}

function windowResized() {
	//The windowResized() function is called once every time the browser window is resized.
	resizeCanvas(windowWidth, windowHeight);//resizes the canvas to given width and height.
	init();
}

i = 0;
while(i < 100){
	resizeCanvas();
	init();
}