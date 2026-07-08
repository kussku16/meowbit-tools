controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(9, 102)
        cursorPosition = 6
    } else {
        if (cursorPosition == 6) {
            cursorSprite.setPosition(9, 89)
            cursorPosition = 5
        } else {
            if (cursorPosition == 5) {
                cursorSprite.setPosition(9, 76)
                cursorPosition = 4
            } else {
                if (cursorPosition == 4) {
                    cursorSprite.setPosition(9, 63)
                    cursorPosition = 3
                } else {
                    if (cursorPosition == 3) {
                        cursorSprite.setPosition(9, 50)
                        cursorPosition = 2
                    } else {
                        if (cursorPosition == 2) {
                            cursorSprite.setPosition(9, 37)
                            cursorPosition = 1
                        } else {
                            if (cursorPosition == 1) {
                                cursorSprite.setPosition(9, 24)
                                cursorPosition = 0
                            }
                        }
                    }
                }
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuOpen == true) {
        desktop()
    } else {
        if (optionOpen == true) {
            menu2()
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuOpen == false && optionOpen == false) {
        menu2()
    } else {
        if (cursorPosition == 0 && optionOpen == false) {
            scene.setBackgroundColor(7)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            temperatureSprite = textsprite.create("Temperature: " + temperature + " C", 0, 8)
            temperatureSprite.setPosition(75, 60)
            temperatureSprite.setScale(1.3, ScaleAnchor.Middle)
            optionOpen = true
            menuOpen = false
        }
    }
})
function menu2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    scene.setBackgroundColor(9)
    temperatureSprite = textsprite.create("Temperature: " + temperature + " C", 0, 8)
    lightSprite = textsprite.create("Light level: " + light2 + " units", 0, 8)
    menu = textsprite.create("MeowTools", 0, 8)
    tilt = textsprite.create("Tilt", 0, 8)
    temperatureSprite.setText("Temperature")
    lightSprite.setText("Light")
    stopWatch = textsprite.create("Stopwatch", 0, 8)
    timer = textsprite.create("Timer", 0, 8)
    dice = textsprite.create("Dice", 0, 8)
    acceleration = textsprite.create("Acceleration", 0, 8)
    cursorSprite = textsprite.create(">>", 0, 2)
    menu.setScale(1.5, ScaleAnchor.Middle)
    menu.setPosition(45, 8)
    temperatureSprite.setPosition(53, 24)
    lightSprite.setPosition(35, 37)
    tilt.setPosition(32, 50)
    stopWatch.setPosition(46, 63)
    timer.setPosition(35, 76)
    acceleration.setPosition(57, 89)
    dice.setPosition(32, 102)
    cursorSprite.setPosition(8, 24)
    _return = textsprite.create("'B' to return", 0, 2)
    _return.setPosition(80, 114)
    menuOpen = true
}
function desktop () {
    scene.setBackgroundColor(4)
    greeting = textsprite.create("Hello Marc!", 0, 8)
    greeting.setPosition(30, 5)
    temperatureSprite.setText("Temperature: " + temperature + " C")
    temperatureSprite.setPosition(58, 95)
    lightSprite.setText("Light level: " + light2 + " units")
    lightSprite.setPosition(70, 105)
    greeting.setVelocity(30, 30)
    temperatureSprite.setVelocity(0, 0)
    lightSprite.setVelocity(0, 0)
    greeting.setBounceOnWall(true)
    temperatureSprite.setBounceOnWall(true)
    lightSprite.setBounceOnWall(true)
    greeting.setScale(1.5, ScaleAnchor.Middle)
    temperatureSprite.setScale(1, ScaleAnchor.Middle)
    lightSprite.setScale(1, ScaleAnchor.Middle)
    menuOpen = false
    optionOpen = false
    sprites.destroy(acceleration)
    sprites.destroy(dice)
    sprites.destroy(stopWatch)
    sprites.destroy(timer)
    sprites.destroy(tilt)
    sprites.destroy(menu)
    sprites.destroy(cursorSprite)
    sprites.destroy(_return)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(9, 37)
        cursorPosition = 1
    } else {
        if (cursorPosition == 1) {
            cursorSprite.setPosition(9, 50)
            cursorPosition = 2
        } else {
            if (cursorPosition == 2) {
                cursorSprite.setPosition(9, 63)
                cursorPosition = 3
            } else {
                if (cursorPosition == 3) {
                    cursorSprite.setPosition(9, 76)
                    cursorPosition = 4
                } else {
                    if (cursorPosition == 4) {
                        cursorSprite.setPosition(9, 89)
                        cursorPosition = 5
                    } else {
                        if (cursorPosition == 5) {
                            cursorSprite.setPosition(9, 102)
                            cursorPosition = 6
                        } else {
                            if (cursorPosition == 6) {
                                cursorSprite.setPosition(9, 24)
                                cursorPosition = 0
                            }
                        }
                    }
                }
            }
        }
    }
})
let _return: TextSprite = null
let acceleration: TextSprite = null
let dice: TextSprite = null
let timer: TextSprite = null
let stopWatch: TextSprite = null
let tilt: TextSprite = null
let menu: TextSprite = null
let optionOpen = false
let cursorSprite: TextSprite = null
let cursorPosition = 0
let menuOpen = false
let lightSprite: TextSprite = null
let temperatureSprite: TextSprite = null
let greeting: TextSprite = null
let light2 = 0
let temperature = 0
scene.setBackgroundColor(4)
temperature = controller.temperature(ControllerTemperatureUnit.Celsius)
light2 = controller.lightLevel()
greeting = textsprite.create("Hello Marc!", 0, 8)
temperatureSprite = textsprite.create("Temperature: " + temperature + " C", 0, 8)
lightSprite = textsprite.create("Light level: " + light2 + " units", 0, 8)
greeting.setPosition(30, 5)
temperatureSprite.setPosition(53, 95)
lightSprite.setPosition(65, 105)
greeting.setVelocity(30, 30)
temperatureSprite.setVelocity(0, 0)
lightSprite.setVelocity(0, 0)
greeting.setBounceOnWall(true)
temperatureSprite.setBounceOnWall(true)
lightSprite.setBounceOnWall(true)
greeting.setScale(1.5, ScaleAnchor.Middle)
temperatureSprite.setScale(1, ScaleAnchor.Middle)
lightSprite.setScale(1, ScaleAnchor.Middle)
menuOpen = false
cursorPosition = 0
game.onUpdateInterval(500, function () {
    temperature = controller.temperature(ControllerTemperatureUnit.Celsius)
    light2 = controller.lightLevel()
})
