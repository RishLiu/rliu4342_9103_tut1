let elementList = [];
let size;
let speed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = windowWidth < windowHeight ? windowWidth : windowHeight;

  creatElements();
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  rect(0, 0, size, size);

  noStroke();

  for (let i = 0; i < elementList.length; i++) {
    elementList[i].display();
  }
console.log(elementList.length)
  elementList[50].move(frameCount%20, 0);
  elementList[51].move(-1, 0);


}

class element {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;

    //wrap elements when they go off the canvas.
    if (this.x < -this.width) {
      this.x = size;
    }
    if (this.x > size) {
      this.x = -this.width;
    }

    if (this.y < -this.height) {
      this.y = size;
    }
    if (this.y > size) {
      this.y = -this.height;
    }
}
}

function creatElements() {

  //Window width horizontal yellow strips
  let p = new element(0, 18 / 800 * size, size, 15 / 800 * size, "#E8D135");
  elementList.push(p);

  let horizontalStrip = [122 / 800 * size, 277 / 800 * size, 343 / 800 * size, 447 / 800 * size, 500 / 800 * size];
  for (let a = 0; a < horizontalStrip.length; a++) {
    elementList.push(new element(0, horizontalStrip[a], size, 20 / 800 * size, "#E8D135"))
  }
  //blue,row 3, column 7
  elementList.push(new element(230/ 800 * size, 363 / 800 * size, 70/ 800 * size, 84 / 800 * size, "#4468BC"));
  let yellow_y = [545 / 800 * size, 618 / 800 * size, 705 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let yellow_w = [45 / 800 * size, 45 / 800 * size, 45 / 800 * size, size, size];
  let yellow_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let m = 0; m < yellow_y.length; m++) {
    elementList.push(new element(0 , yellow_y[m], yellow_w[m], yellow_h[m], "#E8D135"))
  }

  //Window height vertical yellow strips
  let verticalStrip = [45 / 800 * size, 178 / 800 * size, 429 / 800 * size, 462 / 800 * size, 672 / 800 * size]
  for (let b = 0; b < verticalStrip.length; b++) {
    elementList.push(new element(verticalStrip[b], 0, 16 / 800 * size, size, "#E8D135"))
  }

  let list_x = [18 / 800 * size, 92 / 800 * size, 702 / 800 * size, 740 / 800 * size, 740 / 800 * size, 740 / 800 * size, 768 / 800 * size];
  let list_y = [0, 0, 0, 0, 123 / 800 * size, 500 / 800 * size, 0];
  let list_h = [278 / 800 * size, 770 / 800 * size, 297 / 800 * size, 81 / 800 * size, 236 / 800 * size, 155 / 800 * size, size];
  for (let k = 0; k < list_y.length; k++) {
    elementList.push(new element(list_x[k], list_y[k], 16, list_h[k], "#E8D135"))
  }

  // red rect column1
  let column1_x = [18 / 800 * size, 18 / 800 * size, 16 / 800 * size, 18 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 18 / 800 * size];
  let column1_y = [277 / 800 * size, 122 / 800 * size, 343 / 800 * size, 213 / 800 * size, 705 / 800 * size, 618 / 800 * size, 545 / 800 * size, 20 / 800 * size, 65 / 800 * size, 65 / 800 * size, 170 / 800 * size];
  let column1_w = [16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 22 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC"];
  for (let n = 0; n < column1_y.length; n++) {
    elementList.push(new element(column1_x[n], column1_y[n], column1_w[n], column1_h[n], column1_col[n]))
  }
  //blue,row 2, column 10
  elementList.push(new element(510 / 800 * size, 140/ 800 * size, 100 / 800 * size, 138 / 800 * size, "#4468BC"));
  //grey,row 2, column 1
  elementList.push(new element(17 / 800 * size, 40/ 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new element(17 / 800 * size, 260/ 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 1
  elementList.push(new element(45 / 800 * size, 520/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new element(45/ 800 * size, 300/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  


  // red rect column2
  let column2 = [0, 64 / 800 * size, 400 / 800 * size, 500 / 800 * size, 580 / 800 * size, 623 / 800 * size, 755 / 800 * size]
  for (let c = 0; c < column2.length; c++) {
    elementList.push(new element(45 / 800 * size, column2[c], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  elementList.push(new element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  //blue,row 3, column 2
  elementList.push(new element(45 / 800 * size, 277 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 4, column 2
  elementList.push(new element(45 / 800 * size, 345 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //blue,row 5, column 2
  elementList.push(new element(45 / 800 * size, 447 / 800 * size, 17 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 9, column 2
  elementList.push(new element(45 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 3, column 2
  elementList.push(new element(45 / 800 * size, 260/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 2
  elementList.push(new element(45 / 800 * size, 100/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 2
  elementList.push(new element(45 / 800 * size, 650/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));



  // red rect column3
  let column3 = [212 / 800 * size, 580 / 800 * size, 644 / 800 * size];
  for (let d = 0; d < column3.length; d++) {
    elementList.push(new element(92 / 800 * size, column3[d], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(92 / 800 * size, 342 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 3
  elementList.push(new element(92 / 800 * size, 122 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new element(60 / 800 * size, 142 / 800 * size, 50 / 800 * size, 50 / 800 * size, "#4468BC"));
  //blue,row 2, column 3
  elementList.push(new element(92 / 800 * size, 260 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 3, column 3
  elementList.push(new element(92 / 800 * size, 295 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 4, column 3
  elementList.push(new element(92 / 800 * size, 400 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 5, column 3
  elementList.push(new element(92 / 800 * size, 447 / 800 * size, 10/ 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 3
  elementList.push(new element(92 / 800 * size, 500 / 800 * size, 10/ 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new element(62 / 800 * size, 539 / 800 * size, 31 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 7, column 3
  elementList.push(new element(92 / 800 * size, 635 / 800 * size, 10/ 800 * size, 10 / 800 * size, "#4468BC"));
  elementList.push(new element(92 / 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 3
  elementList.push(new element(92 / 800 * size, 700 / 800 * size, 10/ 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new element(92 / 800 * size, 755 / 800 * size, 10/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new element(92 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 200/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 370/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(123/ 800 * size, 70/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  
  

  // red rect column4
  let column4_x = [122 / 800 * size, 92 / 800 * size, 122 / 800 * size, 122 / 800 * size, 160 / 800 * size, 92 / 800 * size, 108 / 800 * size, 124 / 800 * size, 108 / 800 * size, 108 / 800 * size, 108 / 800 * size, 124 / 800 * size, 124 / 800 * size,122 / 800 * size,];
  let column4_y = [33 / 800 * size, 48 / 800 * size, 33 / 800 * size, 90 / 800 * size, 122 / 800 * size, 210 / 800 * size, 278 / 800 * size, 278 / 800 * size, 395 / 800 * size, 580 / 800 * size, 630 / 800 * size, 680 / 800 * size, 755 / 800 * size,18 / 800 * size,];
  let column4_w = [32 / 800 * size, 86 / 800 * size, 32 / 800 * size, 32 / 800 * size, 16 / 800 * size, 86 / 800 * size, 16 / 800 * size, 37 / 800 * size, 70 / 800 * size, 70 / 800 * size, 70 / 800 * size, 20 / 800 * size, 20 / 800 * size,20 / 800 * size];
  let column4_h = [35 / 800 * size, 22 / 800 * size, 35 / 800 * size, 33 / 800 * size, 20 / 800 * size, 50 / 800 * size, 20 / 800 * size, 76 / 800 * size, 51 / 800 * size, 16 / 800 * size, 51 / 800 * size, 16 / 800 * size, ,16 / 800 * size];
  let column4_col = ["#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C","#4468BC"];
  for (let o = 0; o < column4_y.length; o++) {
    elementList.push(new element(column4_x[o], column4_y[o], column4_w[o], column4_h[o], column4_col[o]))
  }
  


  // red rect column5
  let column5_x = [209 / 800 * size, 305 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 226 / 800 * size, 305 / 800 * size, 226 / 800 * size, 238 / 800 * size, 265 / 800 * size, 321 / 800 * size, 376 / 800 * size, 192 / 800 * size, 342 / 800 * size, 342 / 800 * size, 398 / 800 * size, 356 / 800 * size];
  let column5_y = [31 / 800 * size, 277 / 800 * size, 277 / 800 * size, 363 / 800 * size, 418 / 800 * size, 500 / 800 * size, 500 / 800 * size, 343 / 800 * size, 343 / 800 * size, 363 / 800 * size, 397 / 800 * size, 447 / 800 * size, 447 / 800 * size, 447 / 800 * size, 577 / 800 * size, 577 / 800 * size, 680 / 800 * size, 680 / 800 * size, 754 / 800 * size];
  let column5_w = [70 / 800 * size, 20 / 800 * size, 55 / 800 * size, 55 / 800 * size, 55 / 800 * size, , 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 55 / 800 * size, 32 / 800 * size, 20 / 800 * size, 20 / 800 * size, 237 / 800 * size, 16 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 53 / 800 * size];
  let column5_h = [56 / 800 * size, 20 / 800 * size, 70 / 800 * size, 16 / 800 * size, 30 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 25 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 40 / 800 * size];
  let column5_col = ["#A7392C", "#A7392C", "#E8D135", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C"];
  for (let p = 0; p < column5_y.length; p++) {
    elementList.push(new element(column5_x[p], column5_y[p], column5_w[p], column5_h[p], column5_col[p]))
  }
  //grey,row 5, column 5
  elementList.push(new element(376/ 800 * size, 122/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(300/ 800 * size, 15/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 15/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 230/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 320/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 400/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175/ 800 * size, 600/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260/ 800 * size, 680/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260/ 800 * size, 400/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  
  


  // red rect column6
  let column6Alt_y = [0, 170 / 800 * size, 278 / 800 * size];
  let column6Alt_h = [20 / 800 * size, 25 / 800 * size, 20 / 800 * size];
  for (let l = 0; l < column6Alt_y.length; l++) {
    elementList.push(new element(429 / 800 * size, column6Alt_y[l], 16 / 800 * size, column6Alt_h[l], "#A7392C"))
  }
  let column6 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let e = 0; e < column6.length; e++) {
    elementList.push(new element(429 / 800 * size, column6[e], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  //blue,row 1, column 6
  elementList.push(new element(180/ 800 * size, 65 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(180/ 800 * size, 100 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new element(180/ 800 * size, 150 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new element(180/ 800 * size, 275 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 6
  elementList.push(new element(180/ 800 * size, 275 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 4, column 6
  elementList.push(new element(180/ 800 * size, 350/ 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 5, column 6
  elementList.push(new element(180/ 800 * size, 450 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 6
  elementList.push(new element(180/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 6
  elementList.push(new element(180/ 800 * size, 685 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 6
  elementList.push(new element(180/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));


  // red rect row7
  let row7 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let f = 0; f < row7.length; f++) {
    elementList.push(new element(462 / 800 * size, row7[f], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 7
  elementList.push(new element(200/ 800 * size, 123 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 7
  elementList.push(new element(225/ 800 * size, 280 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(385/ 800 * size, 280 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blu4,row 3, column 7
  elementList.push(new element(385/ 800 * size, 345 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 7
  elementList.push(new element(300/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(370/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 7
  elementList.push(new element(320/ 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(365/ 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 7
  elementList.push(new element(325/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(345/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(325/ 800 * size, 343/ 800 * size, 56 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(325/ 800 * size, 379/ 800 * size, 56 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(375/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  // red rect column8
  let column8_x = [516 / 800 * size, 593 / 800 * size, 500 / 800 * size, 519 / 800 * size, 519 / 800 * size];
  let column8_y = [278 / 800 * size, 278 / 800 * size, 344 / 800 * size, 447 / 800 * size, 481 / 800 * size]

  for (let g = 0; g < column8_x.length; g++) {
    elementList.push(new element(column8_x[g], column8_y[g], 22 / 800 * size, 20 / 800 * size, "#A7392C"))
  }
  let column_8_x = [525 / 800 * size, 542 / 800 * size, 558 / 800 * size, 519 / 800 * size, 558 / 800 * size, 537 / 800 * size, 491 / 800 * size];
  let column_8_y = [182 / 800 * size, 208 / 800 * size, 363 / 800 * size, 344 / 800 * size, 467 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let column_8_w = [70 / 800 * size, 38 / 800 * size, 69 / 800 * size, 22 / 800 * size, 69 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column_8_h = [65 / 800 * size, 28 / 800 * size, 83 / 800 * size, 171 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let column_8_col = ["#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C"];
  for (let q = 0; q < column_8_y.length; q++) {
    elementList.push(new element(column_8_x[q], column_8_y[q], column_8_w[q], column_8_h[q], column_8_col[q]))
  }
  //blue,row 2, column 8
  elementList.push(new element(430 / 800 * size, 65 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(430 / 800 * size, 125 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(430 / 800 * size, 200/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 8
  elementList.push(new element(430 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 8
  elementList.push(new element(430 / 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 8
  elementList.push(new element(430 / 800 * size, 681/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 230/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 345/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 500/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430/ 800 * size, 620/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));



  // red rect column9
  let column9_y = [177 / 800 * size, 344 / 800 * size, 448 / 800 * size, 563 / 800 * size, 680 / 800 * size];
  let column9_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size];
  for (let h = 0; h < column9_y.length; h++) {
    elementList.push(new element(672 / 800 * size, column9_y[h], 16, column9_h[h], "#A7392C"))
  }
  elementList.push(new element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 7, column 9
  elementList.push(new element(463 / 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 9
  elementList.push(new element(463 / 800 * size, 500/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 9
  elementList.push(new element(463 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 9
  elementList.push(new element(463 / 800 * size, 200/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 150/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 260/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 350/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463/ 800 * size, 560/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));

  // red rect row10
  let row10_x = [702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 689 / 800 * size, 687 / 800 * size, 687 / 800 * size, 722 / 800 * size, 720 / 800 * size];
  let row10_y = [0, 78 / 800 * size, 164 / 800 * size, 275 / 800 * size, 603 / 800 * size, 639 / 800 * size, 387 / 800 * size, 387 / 800 * size, 755 / 800 * size];
  let row10_w = [16 / 800 * size, 16 / 800 * size, 54 / 800 * size, 16 / 800 * size, 51 / 800 * size, 93 / 800 * size, 93 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let row10_h = [20 / 800 * size, 16 / 800 * size, 47 / 800 * size, 20 / 800 * size, 36 / 800 * size, 16 / 800 * size, 39 / 800 * size, 39 / 800 * size, 16 / 800 * size];
  let row10_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C"];
  for (let r = 0; r < row10_y.length; r++) {
    elementList.push(new element(row10_x[r], row10_y[r], row10_w[r], row10_h[r], row10_col[r]))
  }
  //blue,row 4, column 10
  elementList.push(new element(560 / 800 * size, 345/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 10
  elementList.push(new element(630 / 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(545 / 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new element(625 / 800 * size, 500/ 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new element(520 / 800 * size, 500/ 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new element(625 / 800 * size, 680/ 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new element(520 / 800 * size, 680/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(570/ 800 * size, 400/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(570/ 800 * size, 447/ 800 * size, 50 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(559/ 800 * size, 483/ 800 * size, 70 / 800 * size, 15/ 800 * size, "#D5D5D0"));
  


  // red rect row11

  elementList.push(new element(740 / 800 * size, 346 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  elementList.push(new element(740 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //blue,row 6, column 11
  elementList.push(new element(740 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 11
  elementList.push(new element(740 / 800 * size, 450/ 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 6, column 11
  elementList.push(new element(685 / 800 * size, 460/ 800 * size, 50 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new element(720 / 800 * size, 85/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new element(735 / 800 * size, 640/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 483/ 800 * size, 15 / 800 * size, 15/ 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 150/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 260/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 230/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 400/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670/ 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));


  // red rect row12
  let row12_y = [0, 33 / 800 * size, 81 / 800 * size, 238 / 800 * size, 346 / 800 * size, 446 / 800 * size, 561 / 800 * size, 638 / 800 * size, 678 / 800 * size, 755 / 800 * size];
  let row12_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let j = 0; j < row12_y.length; j++) {
    elementList.push(new element(768 / 800 * size, row12_y[j], 16 / 800 * size, row12_h[j], "#A7392C"))
  }

  //red rect row13
  elementList.push(new element(784 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 200/ 800 * size, 15 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(123/ 800 * size, 225/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(128/ 800 * size, 310/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(130/ 800 * size, 650/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
}