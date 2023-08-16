// import basic from 'basic';

b.onRender = async function () {

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

    let x = 0;

    
    await b.doEvents();

    const r = b.askText('q1');
    console.log(r);

    const r2 = b.askBoolean('q2');
    console.log(r2);

    while(true) {
        b.circle(x,10,50);
        const t = await b.doEvents();
        console.log(t);
        x += 1;
    }





}