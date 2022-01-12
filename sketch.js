/*

@author Cody
@date 2022-01-12

 */
let font, a, b

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    b = createVector(200, 60)
}

function vectorProjection(a, b) {
    let bCopy = b.copy().normalize()
    let sp = a.dot(bCopy)
    bCopy.mult(sp)
    return bCopy
}

function draw() {
    background(234, 34, 24)
    stroke(0, 0, 100)
    let pos = createVector(100, 200)
    a = new createVector(mouseX-pos.x, mouseY-pos.y)
    strokeWeight(4)
    line(pos.x, pos.y, pos.x + a.x, pos.y + a.y)
    line(pos.x, pos.y, pos.x + b.x, pos.y + b.y)

    fill(120, 100, 100)
    stroke(120, 100, 100)
    strokeWeight(10)
    circle(pos.x, pos.y, 8)
    circle(pos.x + a.x, pos.y + a.y, 8)


    let v = vectorProjection(a, b)
    stroke(210, 100, 100)
    strokeWeight(8)
    line(pos.x, pos.y, pos.x + v.x, pos.y + v.y)
    fill(0, 100, 100)
    stroke(0, 100, 100)
    circle(pos.x + v.x, pos.y + v.y, 8)

    // draw a dotted line between our vertex and the endpoint of a
    drawingContext.setLineDash([5, 5])
    stroke(0, 0, 100, 50)
    strokeWeight(2)
    line(pos.x + v.x, pos.y + v.y, pos.x + a.x, pos.y + a.y)
    drawingContext.setLineDash([])

}