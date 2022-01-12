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

    let v = vectorProjection(a, b)
    strokeWeight(8)
    line(pos.x, pos.y, pos.x + v.x, pos.y + v.y)

}