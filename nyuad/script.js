var H = 1560
var W = 1440
var R = 15
var C = 15
var h = H/C
var w = W/R
var ro = 3
var ro2 = 1
var co = 2
var co2 = 2

window.onload = async function(){
    const canvas = document.getElementById("canvas")
    canvas.height = H
    canvas.width = W
    const ctx = canvas.getContext("2d")

    var grid = []

    for(var r = ro; r < R-ro2; r++){
        var row = []

        for(var c = co; c < C-co2; c++){
            var d = Math.sqrt((r-Math.floor(R/2))**2 + (c-Math.floor(C/2))**2)
            
            if(100/((Math.floor(Math.random() * d))) > 40){
                var red = Math.floor(Math.random() * 150)
                var green = Math.floor(Math.random() * 255)
                ctx.fillStyle = `rgba(${red}, ${green}, 0, 0.5)`
                ctx.fillRect(c*w, r*h, w, h)
                row.push(green-red)
            } else {
                row.push(null)
            }
        }

        grid.push(row)
    }

    var r = 0
    var c = 0
    
    ctx.beginPath()
    ctx.moveTo(co*w+w/2+c*w, ro*h+h/2+r*h)
    ctx.fillStyle = "blue"
    ctx.lineWidth = 15

    while(true){
        await new Promise(r => setTimeout(r, 200));

        if(r+1 < R && grid[r+1][c] != null && c+1 < C && grid[r][c+1] != null){
            if(Math.floor(Math.random()*2) == 0){
                r += 1
            } else {
                c += 1
            }
        } else if(r+1 < R && grid[r+1][c] != null){
            r += 1
        } else if(c+1 < C && grid[r][c+1] != null){
            c += 1
        } else {
            break
        }

        ctx.lineTo(co*w+w/2+c*w, ro*h+h/2+r*h)
        ctx.stroke()
    }
}