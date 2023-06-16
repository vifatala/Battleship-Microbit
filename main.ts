//  Function Shooting:
function Shooting() {
    
    cursorX = 2
    cursorY = 2
    while (finished == false) {
        led.plot(cursorX, cursorY)
        basic.pause(100)
        if (input.buttonIsPressed(Button.A)) {
            if (cursorX < 4) {
                music.playTone(523, music.beat(BeatFraction.Eighth))
                cursorX += 1
                basic.clearScreen()
            } else if (cursorX >= 4) {
                music.playTone(523, music.beat(BeatFraction.Eighth))
                cursorX = 0
                basic.clearScreen()
            }
            
        } else if (input.buttonIsPressed(Button.B)) {
            if (cursorY < 4) {
                music.playTone(523, music.beat(BeatFraction.Eighth))
                cursorY += 1
                basic.clearScreen()
            } else if (cursorY >= 4) {
                music.playTone(523, music.beat(BeatFraction.Eighth))
                cursorY = 0
                basic.clearScreen()
            }
            
        } else if (input.isGesture(Gesture.Shake)) {
            finished = true
        }
        
    }
    if (finished == true) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
            music.playTone(494, music.beat(BeatFraction.Quarter))
            basic.pause(0.5)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            `)
            music.playTone(349, music.beat(BeatFraction.Quarter))
            basic.pause(0.5)
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            `)
            music.playTone(247, music.beat(BeatFraction.Quarter))
            basic.pause(0.5)
            basic.clearScreen()
        }
        radio.sendValue("X", cursorX)
        radio.sendValue("Y", cursorY)
        finished = false
    }
    
}

//  Funciton Show Ships
function showShips() {
    
    if (randomNum == 1) {
        basic.showLeds(`
            . . . . .
                        # # . . .
                        . . # # .
                        . . . . .
                        . . . . .
        `)
        ship1X = 0
        ship1Y = 1
        ship2X = 2
        ship2Y = 2
    } else if (randomNum == 2) {
        basic.showLeds(`
            . . . . .
                        . # # . .
                        . . . . .
                        . . . # #
                        . . . . .
        `)
        ship1X = 1
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    } else if (randomNum == 3) {
        basic.showLeds(`
            . . . . .
                        . # # . .
                        . . . . .
                        # # . . .
                        . . . . .
        `)
        ship1X = 1
        ship1Y = 1
        ship2X = 0
        ship2Y = 3
    } else if (randomNum == 4) {
        basic.showLeds(`
            # # . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
        `)
        ship1X = 0
        ship1Y = 0
        ship2X = 3
        ship2Y = 2
    } else if (randomNum == 5) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . # # .
                        . . . # #
        `)
        ship1X = 2
        ship1Y = 3
        ship2X = 3
        ship2Y = 4
    } else if (randomNum == 6) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . # # .
                        # # . . .
        `)
        ship1X = 2
        ship1Y = 3
        ship2X = 0
        ship2Y = 4
    } else if (randomNum == 7) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . # # . .
                        # # . . .
                        . . . . .
        `)
        ship1X = 1
        ship1Y = 2
        ship2X = 0
        ship2Y = 3
    } else if (randomNum == 8) {
        basic.showLeds(`
            . . . . .
                        . # # . .
                        . . . . .
                        . . . # #
                        . . . . .
        `)
        ship1X = 1
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    } else if (randomNum == 9) {
        basic.showLeds(`
            . . . # #
                        . . . # #
                        . . . . .
                        . . . . .
                        . . . . .
        `)
        ship1X = 3
        ship1Y = 0
        ship2X = 3
        ship2Y = 1
    } else if (randomNum == 10) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . # #
                        . . . # #
                        . . . . .
        `)
        ship1X = 3
        ship1Y = 2
        ship2X = 3
        ship2Y = 3
    } else if (randomNum == 11) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
                        . . # # .
        `)
        ship1X = 0
        ship1Y = 2
        ship2X = 2
        ship2Y = 4
    } else if (randomNum == 12) {
        basic.showLeds(`
            . . . . .
                        . . . # #
                        . . . . .
                        . . . # #
                        . . . . .
        `)
        ship1X = 3
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    } else if (randomNum == 13) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . # #
                        . . # # .
                        . . . . .
        `)
        ship1X = 3
        ship1Y = 2
        ship2X = 2
        ship2Y = 3
    } else if (randomNum == 14) {
        basic.showLeds(`
            . . . . .
                        # # . . .
                        . . . . .
                        . . . . .
                        . . . # #
        `)
        ship1X = 0
        ship1Y = 1
        ship2X = 3
        ship2Y = 4
    } else if (randomNum == 15) {
        basic.showLeds(`
            . . . . .
                        # # # # .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
        ship1X = 0
        ship1Y = 1
        ship2X = 2
        ship2Y = 1
    } else if (randomNum == 16) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # # .
                        . . . # #
                        . . . . .
        `)
        ship1X = 2
        ship1Y = 2
        ship2X = 3
        ship2Y = 3
    } else if (randomNum == 17) {
        basic.showLeds(`
            . # # . .
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
        `)
        ship1X = 1
        ship1Y = 0
        ship2X = 0
        ship2Y = 3
    } else if (randomNum == 18) {
        basic.showLeds(`
            . . . . .
                        . . # # .
                        . . . . .
                        . . . . .
                        . . . # #
        `)
        ship1X = 2
        ship1Y = 1
        ship2X = 3
        ship2Y = 4
    } else if (randomNum == 19) {
        basic.showLeds(`
            # # . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
        `)
        ship1X = 0
        ship1Y = 0
        ship2X = 3
        ship2Y = 2
    } else if (randomNum == 20) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . # #
        `)
        ship1X = 0
        ship1Y = 3
        ship2X = 3
        ship2Y = 4
    } else {
        basic.showLeds(`
            . . . # #
                        . . . . .
                        . . . . .
                        . . . . .
                        # # . . .
        `)
        ship1X = 3
        ship1Y = 0
        ship2X = 0
        ship2Y = 4
    }
    
    if (lives <= 3) {
        led.unplot(life4X, life4Y)
    }
    
    if (lives <= 2) {
        led.unplot(life4X, life4Y)
        led.unplot(life3X, life3Y)
    }
    
    if (lives <= 1) {
        led.unplot(life4X, life4Y)
        led.unplot(life3X, life3Y)
        led.unplot(life2X, life2Y)
    }
    
}

radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (lives > 0) {
        received = receivedString
        if (received == "Winner") {
            while (received == "Winner") {
                basic.showString("You win!")
                basic.showIcon(IconNames.Happy)
                basic.pause(1000)
                basic.clearScreen()
            }
        }
        
        if (received == "Start") {
            basic.showString(" 321")
            received = "Go"
        }
        
        if (received == "Go") {
            for (let index2 = 0; index2 < 4; index2++) {
                showShips()
                music.playTone(220, music.beat(BeatFraction.Quarter))
                basic.pause(300)
                basic.clearScreen()
                basic.pause(300)
            }
            basic.showNumber(lives)
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
            Shooting()
            showShips()
            radio.sendString("Go")
        }
        
    } else {
        radio.sendString("Winner")
        while (lives <= 0) {
            basic.showString("You lost!")
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
    
})
//  if lives <= 0:
//  loser = True
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "X") {
        bombX = value
    } else if (name == "Y") {
        bombY = value
    }
    
    if ((bombX == ship1X || bombX == ship1X + 1) && bombY == ship1Y || (bombX == ship2X || bombX == ship2X + 1) && bombY == ship2Y) {
        if (bombX != life4X || bombY != life4Y) {
            if (bombX != life3X || bombY != life3Y) {
                if (bombX != life2X || bombY != life2Y) {
                    if (bombX != life1X || bombY != life1Y) {
                        if (lives == 4) {
                            life4X = bombX
                            life4Y = bombY
                        } else if (lives == 3) {
                            life3X = bombX
                            life3Y = bombY
                        } else if (lives == 2) {
                            life2X = bombX
                            life2Y = bombY
                        } else if (lives == 1) {
                            life1X = bombX
                            life1Y = bombY
                        } else {
                            radio.sendString("You won!")
                        }
                        
                        lives += -1
                        music.playTone(175, music.beat(BeatFraction.Whole))
                        basic.showIcon(IconNames.Skull)
                        basic.pause(1000)
                    }
                    
                }
                
            }
            
        }
        
    }
    
})
let bombY = 0
let bombX = 0
let received = ""
let ship2Y = 0
let ship2X = 0
let ship1Y = 0
let ship1X = 0
let finished = false
let cursorY = 0
let cursorX = 0
let randomNum = 0
let lives = 0
let life1X = 0
let life2X = 0
let life3X = 0
let life4X = 0
let life4Y = 0
let life3Y = 0
let life2Y = 0
let life1Y = 0
let loser = false
life1Y = -1
life2Y = -1
life3Y = -1
life4Y = -1
life4X = -1
life3X = -1
life2X = -1
life1X = -1
basic.showIcon(IconNames.Happy)
//  Variables
radio.setGroup(10)
lives = 4
randomNum = randint(1, 21)
radio.sendString("Start")
