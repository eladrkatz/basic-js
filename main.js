// import basic from 'basic';

b.onRender = function () {

    b.setFill("white");
    b.setStroke("purple")

    b.rect(0, 0, 100, 100);

    b.setLineWidth(6);
    b.setStroke('green');

    b.line(500, 500, 300, 400);

    b.setFill('red');
    b.setStroke('yellow');
    b.circle(550, 50, 100);
}