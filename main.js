// import basic from 'basic';

b.onRender = function () {

    b.setFillColor("white");
    b.setLineColor("purple")

    b.rectangle(0, 0, 100, 100);

    b.setLineWidth(6);
    b.setLineColor('green');

    b.line(500, 500, 300, 400);

    b.setFillColor('red');
    b.circle(550, 50, 100);
    
    b.setLineWidth(1);

    b.setLineColor('black');
    b.setFillColor('white');
    b.text('Hello World!', 150, 120);
    
    b.setFillColor('blue');
    b.text('Hello World!', 150, 60, '60px', 'Tahoma');
}