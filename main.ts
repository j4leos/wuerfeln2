function fnZeigeWuerfel () {
    if (vZahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (vZahl == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (vZahl == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (vZahl == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (vZahl == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (vZahl == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    basic.pause(100)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    fnWuerfeln()
    fnZeigeWuerfel()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    fnWuerfeln()
    basic.showNumber(vZahl)
})
function fnWuerfeln () {
    vZahl = randint(1, 6)
    basic.clearScreen()
    basic.setLedColors(0x00ff00, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x00ff00, 0x00ff00, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    basic.pause(500)
    basic.turnRgbLedOff()
}
let vZahl = 0
let vComment = "Taste A: Wuerfel klassisch"
vComment = "Taste B: Wuerfel mit Zahlen"
basic.forever(function () {
	
})
