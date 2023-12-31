
let _canvas = null;
let _ctx = null;

function init() {

    window.addEventListener('load', async (e) => {

        const { x, y } = getViewportSize();

        _canvas = document.createElement("canvas");
        _canvas.className = "myClass";
        _canvas.id = "myId";

        _canvas.height = y;
        _canvas.width = x;

        body = document.getElementsByTagName('body')[0];

        body.appendChild(_canvas);

        await b.doEvents();

        b.onRender();

    });

    window.addEventListener('resize', function (event) {

        const { x, y } = getViewportSize();

        _canvas.height = y;
        _canvas.width = x;

        // b.onRender();

    }, true);

    // setTimeout(() => {
    //     location.reload();
    // }, 500);

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

function line(x1, y1, x2, y2) {

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

function setFillColor(fill) {
    const ctx = getCtx();
    ctx.fillStyle = fill;
}

function setLineColor(color) {
    const ctx = getCtx();
    ctx.strokeStyle = color;
}

function circle(x, y, radius) {
    const ctx = getCtx();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);

    ctx.stroke();
    ctx.fill();

}

function rectangle(x, y, width, height) {
    const ctx = getCtx();

    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x,y,width, height);
}

let _fontSize = '30px';
let _fontFamily = 'Arial';

function text(text, x, y, size, font) {

    if (size) _fontSize = size;
    if (font) _fontFamily = font;

    const ctx = getCtx();

    ctx.font = `${_fontSize} ${_fontFamily}`;
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);

}

function askBoolean(question) {
    const resp = window.confirm(question);

    return resp;
}

function askText(question) {
    const resp = window.prompt(question);

    return resp;
}

async function doEvents() {
    return new Promise(res => {
        requestAnimationFrame((time) => res(time));
    });
}

const b = {
    setFillColor, setLineWidth, setLineColor, text,
    line, circle, rectangle, onRender: () => { },
    askBoolean, askText, doEvents
};