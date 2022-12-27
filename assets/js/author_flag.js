const ASPECT_RATIO = 4/7
const LINE_COLORS = ['#239f40', '#FFFFFF', '#da0000'];
const FPS = 20

var ctx;
var width;
var height;
// Auto manage size
window.addEventListener('load', () => {
    // Get HTML elements
    var my_div = document.getElementById("canvas-wrapper")
    var my_canvas = document.getElementById("flag")
    // Update size
    my_canvas.width = my_div.clientWidth
    my_canvas.clientWidth = my_div.clientWidth
    my_canvas.height = my_canvas.width / ASPECT_RATIO
    my_canvas.clientHeight = my_canvas.height

    width = my_canvas.width;
    height = my_canvas.height;

    // get context
    ctx = my_canvas.getContext("2d");

    window.addEventListener('resize', function (event) {
        // Update size
        my_canvas.width = my_div.clientWidth
        my_canvas.clientWidth = my_div.clientWidth
        my_canvas.height = my_canvas.width / ASPECT_RATIO
        my_canvas.clientHeight = my_canvas.height

        width = my_canvas.width;
        height = my_canvas.height;

        let element = document.getElementsByClassName("author__urls")[0]
        if (element.style.display == "none"){
            my_canvas.style.display = "none"
        } else {
            my_canvas.style.display = "inline-block"
        }
    });

    my_canvas.onclick = function() {
        window.open("https://en.wikipedia.org/wiki/Death_of_Mahsa_Amini")
    }

}, false);

setInterval(IranFlag, 1000 / FPS)


CanvasRenderingContext2D.prototype.functionPath = function (x0, x1, f, n = 50) {
    let deltaX = Math.abs(x1 - x0)
    if (deltaX < n) {
        n = Math.floor(deltaX)
    }
    let dt = (x1 - x0) / (n - 1)

    for (let index = 0; index < n; index++) {
        let x = x0 + index * dt
        this.lineTo(x, f(x))
    }
}


const unused_ratio = 0.2

let waves = [
    [3 / 126, 80 / 190, 0], 
    [1 / 126, 30 / 190, 7], 
    [1.5 / 126, 67 / 190, 10], 
    [.5 / 126, 47 / 190, 3], 
    [4 / 126, 1, 12]];
let t = 0
// wave is (amplitude, length, phi)

function wave_fun(x){
    let out = 0
    for (var i = 0; i < waves.length; i++) {
        let wave = waves[i]
        let amplitude = wave[0] * height
        let w = Math.PI / (wave[1] * width)
        let phi = wave[2]
        out += amplitude * Math.sin(w * (x + t) + phi)
    }
    return out
}

function line_flag(){
    t += 2
    ctx.clearRect(0, 0, width, height)

    ctx.save()
    ctx.translate(0, unused_ratio * height / 2)

    const numColors = LINE_COLORS.length;
    const vspace = height * (1 - unused_ratio);

    for (let index = 0; index < LINE_COLORS.length; index++) {
        const color = LINE_COLORS[index];
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.functionPath(0, width, wave_fun, width);
        ctx.lineTo(width, vspace / numColors);
        ctx.lineTo(0, vspace / numColors);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.translate(0, vspace / numColors);
    }

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.functionPath(0, width, wave_fun, width)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.fill()

    
    // // draw the core
    // ctx.fillStyle = yellow;
    // ctx.translate(0, height  * (1 - unused_ratio))
    // let middle = height / 2 - height * (1 - unused_ratio) - unused_ratio * height / 2

    // ctx.beginPath()
    // ctx.moveTo(0, 0)
    // ctx.functionPath(0, width, wave_fun, width)
    // ctx.translate(0, middle)
    // ctx.functionPath(width, 0, (x) => { return wave_fun(x) }, width)

    // ctx.lineTo(0, 0)
    // ctx.closePath()
    // ctx.fill()

    ctx.restore()
}