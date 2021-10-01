if (true) {
    basic.showString("si le hablas bien estara felis  ")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
} else {
    basic.showString("tsi no hablan el te dira bravo hablame")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
}
if (true) {
    basic.showString("si le doy  agua estara felis ")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
} else {
    basic.showString("si  no le das agua se pondra bravo despues de una semana")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
}
basic.forever(function () {
	
})
