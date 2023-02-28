input.onSound(DetectedSound.Loud, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
}
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
