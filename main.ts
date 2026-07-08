controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(10, 106)
        cursorPosition = 6
    } else {
        if (cursorPosition == 6) {
            cursorSprite.setPosition(10, 93)
            cursorPosition = 5
        } else {
            if (cursorPosition == 5) {
                cursorSprite.setPosition(10, 80)
                cursorPosition = 4
            } else {
                if (cursorPosition == 4) {
                    cursorSprite.setPosition(10, 67)
                    cursorPosition = 3
                } else {
                    if (cursorPosition == 3) {
                        cursorSprite.setPosition(10, 54)
                        cursorPosition = 2
                    } else {
                        if (cursorPosition == 2) {
                            cursorSprite.setPosition(10, 41)
                            cursorPosition = 1
                        } else {
                            if (cursorPosition == 1) {
                                cursorSprite.setPosition(10, 28)
                                cursorPosition = 0
                            }
                        }
                    }
                }
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuOpen == false) {
        menu2()
    } else {
        desktop()
    }
})
function menu2 () {
    sprites.destroy(greeting)
    scene.setBackgroundColor(9)
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
    menu.setPosition(45, 10)
    temperatureSprite.setPosition(53, 28)
    lightSprite.setPosition(35, 41)
    tilt.setPosition(32, 54)
    stopWatch.setPosition(46, 67)
    timer.setPosition(35, 80)
    acceleration.setPosition(57, 93)
    dice.setPosition(32, 106)
    cursorSprite.setPosition(10, 28)
    menuOpen = true
}
function desktop () {
    scene.setBackgroundColor(4)
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
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(10, 41)
        cursorPosition = 1
    } else {
        if (cursorPosition == 1) {
            cursorSprite.setPosition(10, 54)
            cursorPosition = 2
        } else {
            if (cursorPosition == 2) {
                cursorSprite.setPosition(10, 67)
                cursorPosition = 3
            } else {
                if (cursorPosition == 3) {
                    cursorSprite.setPosition(10, 80)
                    cursorPosition = 4
                } else {
                    if (cursorPosition == 4) {
                        cursorSprite.setPosition(10, 93)
                        cursorPosition = 5
                    } else {
                        if (cursorPosition == 5) {
                            cursorSprite.setPosition(10, 106)
                            cursorPosition = 6
                        } else {
                            if (cursorPosition == 6) {
                                cursorSprite.setPosition(10, 28)
                                cursorPosition = 0
                            }
                        }
                    }
                }
            }
        }
    }
})
let acceleration: TextSprite = null
let dice: TextSprite = null
let timer: TextSprite = null
let stopWatch: TextSprite = null
let tilt: TextSprite = null
let menu: TextSprite = null
let cursorSprite: TextSprite = null
let cursorPosition = 0
let menuOpen = false
let light2 = 0
let lightSprite: TextSprite = null
let temperature = 0
let temperatureSprite: TextSprite = null
let greeting: TextSprite = null
scene.setBackgroundColor(4)
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
