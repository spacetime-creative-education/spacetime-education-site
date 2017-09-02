export default function sketch (p) {
var stars = [];
var speed = 10;

var starcount = 0;

var mx;
var my;

// Text trans stuff
var outroString ="";
var globalSpeed = 4; // smaller = longer duration
var initDelay = 10000; // in ms

var whiteness = 0;
var opa = 0;
var whitescreen = false;
var compwhite = false;
p.setup = function() {
  p.createCanvas(window.innerWidth, 300);
  if (window.innerWidth >= window.innerHeight) {
    starcount = p.width / 3;
  } else {
    starcount = p.height / 3;
  }
  for (var i = 0; i < starcount; i ++) {
    stars[i] = new Star();
  }
}

p.draw = function () {
  p.push();
  if (p.mouseX <= (p.width/2) - 10) {
    speed = p.map(p.mouseX, 0, (p.width/2) - 10, 0, 75);
  } else if (p.mouseX >= (p.width/2) + 10) {
    speed = p.map(p.mouseX, (p.width/2) + 10, p.width, 75, 0);

  }

  if (
    p.mouseX > (p.width/2) - 30 &&
    p.mouseX < (p.width/2) + 30 &&
    p.mouseY > (p.height/2) - 30 &&
    p.mouseY < (p.height/2) + 30 &&
    whitescreen == false
  ) {
    speed += 2;
     if (speed > 500) {
       speed = 500;
       whitescreen = true;
     }
  }
  p.background(0);
  p.translate(p.mouseX, p.mouseY);
  for (var i = 0; i < stars.length; i ++) {
    stars[i].update();
    stars[i].show();
  }
  p.pop();
  // rect(p.width/2,p.height/2,2,2);
  if (whitescreen) {
    if (whiteness < 255) {
      whiteness += 2.5;
    } else if(compwhite == false) {
      compwhite = true;
      p.TextAni("Wow there!! you went a little too fast...");
    }

    p.noStroke();
    p.fill(255, whiteness);
    p.rect(0, 0, p.width, p.height);

    if (compwhite) {
      if (opa < 255) {
        opa += 2.5;
      }
      p.fill(0, opa);
      p.textAlign(p.CENTER);
      p.textSize(50);
      p.text(outroString, p.width/2, p.height/2);
    }
  }

}

function Star() {
  this.x = p.random(-p.width, p.width);
  this.y = p.random(-p.height, p.height);
  this.z = p.random(p.width);
  this.pz = this.z;
  this.showCircle = false;

  this.update = function() {
    this.z -= speed;
    if (this.z < 1) {
      this.x = p.random(-p.width, p.width);
      this.y = p.random(-p.height, p.height);
      this.z = p.random(p.width);
      this.pz = this.z;
    }
    if (speed < 20) {
      this.showCircle = true;
    } else if (speed > 20) {
      this.showCircle = false;
    }
  }

  this.show = function() {
    p.fill(255);
    p.noStroke();

    var sx = p.map(this.x / this.z, 0, 1, 0, p.width);
    var sy = p.map(this.y / this.z, 0, 1, 0, p.height);

    var r = p.map(this.z, 0, p.width, 6, 0);
    if (this.showCircle) {
      p.ellipse(sx, sy, r, r);
    }

    var px = p.map(this.x / this.pz, 0, 1, 0, p.width)
    var py = p.map(this.y / this.pz, 0, 1, 0, p.height)

    this.pz = this.z;
    p.stroke(255);
    p.strokeWeight(2);
    p.line(px, py, sx ,sy);

  }
}



function TextAni(string) {
    var startStr = 0; //string process
    var strLen = string.length; //string length
    var inStr = string; //initial string
    var ensString = ""; //ensemble string
    strAnTo(startStr, strLen, inStr, ensString, initDelay);

}

function strAnTo(startStr, strLen, inStr, ensString, ToDur) { //string antimate timeout
    var startStrAni = startStr; //string process
    var strLenAni = strLen; //string length
    var inStrAni = inStr; //initial string
    var ensStringAni = ensString; //ensemble string
    var strAnIt = setTimeout(function () {
        if (startStrAni <= strLenAni) {
            startStrAni ++;
            ensStringAni = inStrAni.substr(0, startStrAni);
            outroString = inStrAni.substr(0, startStrAni);
            if (inStrAni.charAt(startStrAni) == ",") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2000);
            } else if (inStrAni.charAt(startStrAni) == ".") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 3500);
            } else if (inStrAni.charAt(startStrAni) == "?") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2500);
            } else if (inStrAni.charAt(startStrAni) == "!") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 2200);
            } else if (inStrAni.charAt(startStrAni) == " ") {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 1500);
            } else {
                strAnTo(startStrAni, strLenAni, inStrAni, ensStringAni, 1000);
            }
        }
    },ToDur/globalSpeed)
}

};
