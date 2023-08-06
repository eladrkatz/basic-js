
let canvas;

function init() {

    window.addEventListener('load', (e) => {

        const { x, y } = getViewportSize();

        canvas = document.createElement("canvas");
        canvas.className = "myClass";
        canvas.id = "myId";

        canvas.height = y;
        canvas.width = x;

        body = document.getElementsByTagName('body')[0],

            body.appendChild(canvas);

        basic.onRender();

    });



    window.addEventListener('resize', function (event) {

        const { x, y } = getViewportSize();

        canvas.height = y;
        canvas.width = x;

        basic.onRender();

    }, true);

}

init();


function getViewportSize() {
    docElem = document.documentElement,
        body = document.getElementsByTagName('body')[0],
        x = window.innerWidth || docElem.clientWidth || body.clientWidth,
        y = window.innerHeight || docElem.clientHeight || body.clientHeight;

    return { x, y };
}


function line(x1, y1, x2, y2, width, stroke) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = width;

    ctx.strokeStyle = stroke;
    ctx.stroke();
}

function circle(x, y, radius, fill, stroke) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);

    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;

    ctx.stroke();
    ctx.fill();

}

function rect(x, y, width, height, color) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

}

const basic = {
    line, circle, rect, onRender: () => { }
};