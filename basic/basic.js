
let _canvas = null;
let _ctx = null;

function init() {

    window.addEventListener('load', (e) => {

        const { x, y } = getViewportSize();

        _canvas = document.createElement("canvas");
        _canvas.className = "myClass";
        _canvas.id = "myId";

        _canvas.height = y;
        _canvas.width = x;

        body = document.getElementsByTagName('body')[0];

        body.appendChild(_canvas);

        b.onRender();

    });



    window.addEventListener('resize', function (event) {

        const { x, y } = getViewportSize();

        _canvas.height = y;
        _canvas.width = x;

        b.onRender();

    }, true);

}

init();

function getViewportSize() {
    docElem = document.documentElement;
    body = document.getElementsByTagName('body')[0];
    x = window.innerWidth || docElem.clientWidth || body.clientWidth;
    y = window.innerHeight || docElem.clientHeight || body.clientHeight;

    return { x, y };
}

function getCtx() {
    if (!_ctx) {
        _ctx = _canvas.getContext('2d');
    }

    return _ctx;
}

function line(x1, y1, x2, y2, width, stroke) {

    const ctx = getCtx();

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function setLineWidth(width) {
    const ctx = getCtx();
    ctx.lineWidth = width;
}

function setFill(fill) {
    const ctx = getCtx();
    ctx.fillStyle = fill;
}

function setStroke(stroke) {
    const ctx = getCtx();
    ctx.strokeStyle = stroke;
}

function circle(x, y, radius) {
    const ctx = getCtx();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);

    ctx.stroke();
    ctx.fill();

}

function rect(x, y, width, height) {
    const ctx = getCtx();

    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x,y,width, height);
}

const b = {
    setFill, setLineWidth, setStroke,
    line, circle, rect, onRender: () => { }
};