# Function Shooting:
def Shooting():
    global cursorX, cursorY, finished
    cursorX = 2
    cursorY = 2
    while finished == False:
        led.plot(cursorX, cursorY)
        basic.pause(100)
        if input.button_is_pressed(Button.A):
            if cursorX < 4:
                music.play_tone(523, music.beat(BeatFraction.EIGHTH))
                cursorX += 1
                basic.clear_screen()
            elif cursorX >= 4:
                music.play_tone(523, music.beat(BeatFraction.EIGHTH))
                cursorX = 0
                basic.clear_screen()
        elif input.button_is_pressed(Button.B):
            if cursorY < 4:
                music.play_tone(523, music.beat(BeatFraction.EIGHTH))
                cursorY += 1
                basic.clear_screen()
            elif cursorY >= 4:
                music.play_tone(523, music.beat(BeatFraction.EIGHTH))
                cursorY = 0
                basic.clear_screen()
        elif input.is_gesture(Gesture.SHAKE):
            finished = True
    if finished == True:
        for index in range(2):
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
            music.play_tone(494, music.beat(BeatFraction.QUARTER))
            basic.pause(0.5)
            basic.clear_screen()
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            """)
            music.play_tone(349, music.beat(BeatFraction.QUARTER))
            basic.pause(0.5)
            basic.clear_screen()
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
            music.play_tone(247, music.beat(BeatFraction.QUARTER))
            basic.pause(0.5)
            basic.clear_screen()
        radio.send_value("X", cursorX)
        radio.send_value("Y", cursorY)
        finished = False
# Funciton Show Ships
def showShips():
    global ship1X, ship1Y, ship2X, ship2Y
    if randomNum == 1:
        basic.show_leds("""
            . . . . .
                        # # . . .
                        . . # # .
                        . . . . .
                        . . . . .
        """)
        ship1X = 0
        ship1Y = 1
        ship2X = 2
        ship2Y = 2
    elif randomNum == 2:
        basic.show_leds("""
            . . . . .
                        . # # . .
                        . . . . .
                        . . . # #
                        . . . . .
        """)
        ship1X = 1
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    elif randomNum == 3:
        basic.show_leds("""
            . . . . .
                        . # # . .
                        . . . . .
                        # # . . .
                        . . . . .
        """)
        ship1X = 1
        ship1Y = 1
        ship2X = 0
        ship2Y = 3
    elif randomNum == 4:
        basic.show_leds("""
            # # . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
        """)
        ship1X = 0
        ship1Y = 0
        ship2X = 3
        ship2Y = 2
    elif randomNum == 5:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . # # .
                        . . . # #
        """)
        ship1X = 2
        ship1Y = 3
        ship2X = 3
        ship2Y = 4
    elif randomNum == 6:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . # # .
                        # # . . .
        """)
        ship1X = 2
        ship1Y = 3
        ship2X = 0
        ship2Y = 4
    elif randomNum == 7:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # . .
                        # # . . .
                        . . . . .
        """)
        ship1X = 1
        ship1Y = 2
        ship2X = 0
        ship2Y = 3
    elif randomNum == 8:
        basic.show_leds("""
            . . . . .
                        . # # . .
                        . . . . .
                        . . . # #
                        . . . . .
        """)
        ship1X = 1
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    elif randomNum == 9:
        basic.show_leds("""
            . . . # #
                        . . . # #
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        ship1X = 3
        ship1Y = 0
        ship2X = 3
        ship2Y = 1
    elif randomNum == 10:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . # #
                        . . . # #
                        . . . . .
        """)
        ship1X = 3
        ship1Y = 2
        ship2X = 3
        ship2Y = 3
    elif randomNum == 11:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
                        . . # # .
        """)
        ship1X = 0
        ship1Y = 2
        ship2X = 2
        ship2Y = 4
    elif randomNum == 12:
        basic.show_leds("""
            . . . . .
                        . . . # #
                        . . . . .
                        . . . # #
                        . . . . .
        """)
        ship1X = 3
        ship1Y = 1
        ship2X = 3
        ship2Y = 3
    elif randomNum == 13:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . # #
                        . . # # .
                        . . . . .
        """)
        ship1X = 3
        ship1Y = 2
        ship2X = 2
        ship2Y = 3
    elif randomNum == 14:
        basic.show_leds("""
            . . . . .
                        # # . . .
                        . . . . .
                        . . . . .
                        . . . # #
        """)
        ship1X = 0
        ship1Y = 1
        ship2X = 3
        ship2Y = 4
    elif randomNum == 15:
        basic.show_leds("""
            . . . . .
                        # # # # .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        ship1X = 0
        ship1Y = 1
        ship2X = 2
        ship2Y = 1
    elif randomNum == 16:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # # .
                        . . . # #
                        . . . . .
        """)
        ship1X = 2
        ship1Y = 2
        ship2X = 3
        ship2Y = 3
    elif randomNum == 17:
        basic.show_leds("""
            . # # . .
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . . .
        """)
        ship1X = 1
        ship1Y = 0
        ship2X = 0
        ship2Y = 3
    elif randomNum == 18:
        basic.show_leds("""
            . . . . .
                        . . # # .
                        . . . . .
                        . . . . .
                        . . . # #
        """)
        ship1X = 2
        ship1Y = 1
        ship2X = 3
        ship2Y = 4
    elif randomNum == 19:
        basic.show_leds("""
            # # . . .
                        . . . . .
                        . . . # #
                        . . . . .
                        . . . . .
        """)
        ship1X = 0
        ship1Y = 0
        ship2X = 3
        ship2Y = 2
    elif randomNum == 20:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # # . . .
                        . . . # #
        """)
        ship1X = 0
        ship1Y = 3
        ship2X = 3
        ship2Y = 4
    else:
        basic.show_leds("""
            . . . # #
                        . . . . .
                        . . . . .
                        . . . . .
                        # # . . .
        """)
        ship1X = 3
        ship1Y = 0
        ship2X = 0
        ship2Y = 4
    if lives <= 3:
        led.unplot(life4X, life4Y)
    if lives <= 2:
        led.unplot(life4X, life4Y)
        led.unplot(life3X, life3Y)
    if lives <= 1:
        led.unplot(life4X, life4Y)
        led.unplot(life3X, life3Y)
        led.unplot(life2X, life2Y)


def on_received_string(receivedString):
    global received
    if lives > 0:
        received = receivedString
        if received == "Winner":
            while received == "Winner":
                basic.show_string("You win!")
                basic.show_icon(IconNames.HAPPY)
                basic.pause(1000)
                basic.clear_screen()
        if received == "Start":
            basic.show_string(" 321")
            received = "Go"
        if received == "Go":
            for index2 in range(4):
                showShips()
                music.play_tone(220, music.beat(BeatFraction.QUARTER))
                basic.pause(300)
                basic.clear_screen()
                basic.pause(300)
            basic.show_number(lives)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
            Shooting()
            showShips()
            radio.send_string("Go")
    else:
        radio.send_string("Winner")
        while lives <= 0:
            basic.show_string("You lost!")
            basic.show_icon(IconNames.SAD)
            basic.pause(1000)
            basic.clear_screen()
radio.on_received_string(on_received_string)


# if lives <= 0:
# loser = True


def on_received_value(name, value):
    global bombX, bombY, life4X, life4Y, life3X, life3Y, life2X, life2Y, life1X, life1Y, lives
    if name == "X":
        bombX = value
    elif name == "Y":
        bombY = value
    if (bombX == ship1X or bombX == ship1X + 1) and bombY == ship1Y or (bombX == ship2X or bombX == ship2X + 1) and bombY == ship2Y:
        if bombX != life4X or bombY != life4Y:
            if bombX != life3X or bombY != life3Y:
                if bombX != life2X or bombY != life2Y:
                    if bombX != life1X or bombY != life1Y:
                        if lives == 4:
                            life4X = bombX
                            life4Y = bombY
                        elif lives == 3:
                            life3X = bombX
                            life3Y = bombY
                        elif lives == 2:
                            life2X = bombX
                            life2Y = bombY
                        elif lives == 1:
                            life1X = bombX
                            life1Y = bombY
                        else:
                            radio.send_string("You won!")
                        lives += -1
                        music.play_tone(175, music.beat(BeatFraction.WHOLE))
                        basic.show_icon(IconNames.SKULL)
                        basic.pause(1000)
radio.on_received_value(on_received_value)


bombY = 0
bombX = 0
received = ""
ship2Y = 0
ship2X = 0
ship1Y = 0
ship1X = 0
finished = False
cursorY = 0
cursorX = 0
randomNum = 0
lives = 0
life1X = 0
life2X = 0
life3X = 0
life4X = 0
life4Y = 0
life3Y = 0
life2Y = 0
life1Y = 0
loser = False
life1Y = -1
life2Y = -1
life3Y = -1
life4Y = -1
life4X = -1
life3X = -1
life2X = -1
life1X = -1
basic.show_icon(IconNames.HAPPY)
# Variables
radio.set_group(10)
lives = 4
randomNum = randint(1, 21)
radio.send_string("Start")
