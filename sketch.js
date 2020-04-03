let img;

function preload(){

img = loadImage('shanghai123.jpg');

}

function setup(){

createCanvas(2*1200,870);

}

function draw(){

sortHvid();

blur();

}

function sortHvid(){

image(img,0,0);

for (let i=mouseX-20;i<mouseX+20; i += 2){

for (let j=mouseY-20;j<mouseY+20; j += 2){

let c = img.get(i,j);

fill((c[0]+c[1]+c[2])/(3));

noStroke();

rect(i,j,2,2);

}

}

}

function blur(){

image(img,0,0);

for (let i=mouseX-20;i<mouseX+20; i += 1){

for (let j=mouseY-20;j<mouseY+20; j += 1){

let cm = img.get(i,j);

let ct = img.get(i,j-1);
let ct1 = img.get(i-1,j-1)
let ct2 = img.get(i-1,j)
let cb = img.get(i,j+1);
let cb1 = img.get(i-1,j+j)
let cb2 = img.get(i-1,j+1)
let cv = img.get(i-1,j);

let ch = img.get(i+1,j);

let c0 = (cm[0]+ct[0]+cb[0]+cv[0]+ch[0]+ct1[0]+ct2[0]+cb1[0]+cb2[0])/5;

let c1 = (cm[1]+ct[1]+cb[1]+cv[1]+ch[1]+ct1[1]+ct2[1]+cb1[1]+cb2[1])/5;

let c2 = (cm[1]+ct[1]+cb[1]+cv[1]+ch[1])/5;

fill((c0+c1+c2)/3);

noStroke();

rect(i,j,1,1);

}

}

}
