const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    const rect = canvas.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    //path.push(point);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
}

//var path = []; for analysis only

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    //path = [];
    const rect = canvas.getBoundingClientRect();
    //path.push({ x: e.clientX - rect.left, y: e.clientY - rect.top }); 
    //for analytical purposes, to keep track of the path that mouse has taken
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener('mouseup', e => {
    //console.log(path);
    //path.forEach(drawPoint);
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
    const simplifiedPath = simplifyPath(path,5) //(path, tolerance) to select the path drawn as an array of
    //different points on the path
});
function drawPoint(point) {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.fillText(`(${point.x}, ${point.y})`, point.x + 5, point.y - 5);
}

function simplifyPath(path,t){
    if (points.length < 3) return points;

    var firstPoint = points[0];
    var lastPoint = points[points.length - 1];

    
}
canvas.addEventListener('mousemove', draw);
