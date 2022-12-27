const ASPECT_RATIO = 4./7
const LINE_COLORS = ['#239f40', '#FFFFFF', '#da0000'];
const FPS = 20

// var ctx: CanvasRenderingContext2D = 0;
var ctx = 0;
var width;
var height;
var hspace;
var vspace;
// Auto manage size
window.addEventListener('load', () => {
    // Get HTML elements
    var my_div = document.getElementById("canvas-wrapper")
    var my_canvas = document.getElementById("flag")
    // Update size
    my_canvas.width = my_div.clientWidth
    my_canvas.clientWidth = my_div.clientWidth
    my_canvas.height = my_canvas.width * ASPECT_RATIO
    my_canvas.clientHeight = my_canvas.height

    width = my_canvas.width;
    height = my_canvas.height;
    // Update computed space
    vspace = height * (1 - unused_ratio);
    hspace = min(width, vspace / ASPECT_RATIO);
    vspace = hspace * ASPECT_RATIO;

    // get context
    ctx = my_canvas.getContext("2d");

    window.addEventListener('resize', function (event) {
        // Update size
        my_canvas.width = my_div.clientWidth
        my_canvas.clientWidth = my_div.clientWidth
        my_canvas.height = my_canvas.width * ASPECT_RATIO
        my_canvas.clientHeight = my_canvas.height

        width = my_canvas.width;
        height = my_canvas.height;
        // Update computed space
        vspace = height * (1 - unused_ratio);
        hspace = min(width, vspace / ASPECT_RATIO);
        vspace = hspace * ASPECT_RATIO;

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

setInterval(line_flag, 1000 / FPS)


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


const unused_ratio = .2

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
        let amplitude = wave[0] * vspace;
        let w = Math.PI / (wave[1] * hspace)
        let phi = wave[2]
        out += amplitude * Math.sin(w * (x + t) + phi)
    }
    return out
}

function min(a, b){
    return a < b ? a : b;
}

function line_flag(){
    if (ctx == 0)
        return;
    t += 2
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    
    const numColors = LINE_COLORS.length;
    const dy = vspace / numColors;
    
    ctx.translate(0, (height - vspace) / 2);

    // Add waves
    for (let index = 0; index < LINE_COLORS.length; index++) {
        const color = LINE_COLORS[index];
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.functionPath(0, hspace, wave_fun, hspace);
        ctx.translate(0, dy);
        ctx.functionPath(hspace, 0, wave_fun, hspace)
        ctx.closePath();
        ctx.fill();        
    }

    ctx.restore()
}