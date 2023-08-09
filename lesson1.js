b.onRender = function () {

    // b.line(0,0,200,200);
    
    // b.line(200,200,400,200);

   // b.line(500,300,0,0);

b.setLineWidth(2);

b.setLineColor('brown');
b.line(200,550,600,550);
b.line(600,550,600,200);
b.line(200,200,200,550);
b.line(200,200,600,200);

b.setLineColor('red');
b.line(200,200,400,50);
b.line(600,200,400,50);
b.line(200,197,600,197);

b.setLineColor('green');
b.line(450,400,450,550);
b.line(450,400,350,400);
b.line(350,550,350,400);

b.setLineColor('red');
b.line(500,50,500,124);
b.line(500,50,540,50);
b.line(540,50,540,154);

b.setFillColor('white');

b.circle(370,470,10);

}