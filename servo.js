let angle = 90
servos.P0.setAngle(angle)
basic.forever(function () {
    while (angle >= 0 || angle <= 180) {
        if (input.buttonIsPressed(Button.A)) {
            angle += -10
            servos.P0.setAngle(angle)
        }
        if (input.buttonIsPressed(Button.B)) {
            angle += 10
            servos.P0.setAngle(angle)
        }
        serial.writeLine("" + angle)
    }
})
