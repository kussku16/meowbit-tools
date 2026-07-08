controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(9, 102)
        cursorPosition = 6
    } else if (cursorPosition == 6) {
        cursorSprite.setPosition(9, 89)
        cursorPosition = 5
    } else if (cursorPosition == 5) {
        cursorSprite.setPosition(9, 76)
        cursorPosition = 4
    } else if (cursorPosition == 4) {
        cursorSprite.setPosition(9, 63)
        cursorPosition = 3
    } else if (cursorPosition == 3) {
        cursorSprite.setPosition(9, 50)
        cursorPosition = 2
    } else if (cursorPosition == 2) {
        cursorSprite.setPosition(9, 37)
        cursorPosition = 1
    } else if (cursorPosition == 1) {
        cursorSprite.setPosition(9, 24)
        cursorPosition = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuOpen == true) {
        desktop()
    } else if (optionOpen == true) {
        menu2()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuOpen == false && optionOpen == false) {
        menu2()
    } else if (cursorPosition == 0 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        temperatureSprite = textsprite.create("Temperature: " + ("" + temperature) + " C", 0, 8)
        temperatureSprite.setPosition(75, 60)
        temperatureSprite.setScale(1.3, ScaleAnchor.Middle)
        optionOpen = true
        menuOpen = false
    } else if (cursorPosition == 1 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        lightSprite = textsprite.create("Light level: " + ("" + light2) + " units", 0, 8)
        lightSprite.setPosition(78, 60)
        lightSprite.setScale(1.2, ScaleAnchor.Middle)
        optionOpen = true
        menuOpen = false
    } else if (cursorPosition == 2 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        acceleration = textsprite.create("Acceleration", 0, 8)
        acceleration.setPosition(50, 20)
        acceleration.setScale(1.2, ScaleAnchor.Middle)
        accelerationX = textsprite.create("X" + ("" + controller.acceleration(ControllerDimension.X)), 0, 8)
        accelerationX.setPosition(30, 40)
        accelerationY = textsprite.create("Y" + ("" + controller.acceleration(ControllerDimension.Y)), 0, 8)
        accelerationY.setPosition(30, 50)
        accelerationZ = textsprite.create("Z" + ("" + controller.acceleration(ControllerDimension.Z)), 0, 8)
        accelerationZ.setPosition(30, 60)
        optionOpen = true
        menuOpen = false
    } else if (cursorPosition == 3 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        stopWatch = textsprite.create("Stopwatch", 0, 8)
        stopWatch.setPosition(50, 20)
        optionOpen = true
        menuOpen = false
    } else if (cursorPosition == 4 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        timer = textsprite.create("Timer", 0, 8)
        timer.setPosition(50, 20)
        optionOpen = true
        menuOpen = false
    } else if (cursorPosition == 5 && optionOpen == false) {
        scene.setBackgroundColor(7)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        dice = textsprite.create("Dice", 0, 8)
        timer.setPosition(50, 20)
        optionOpen = true
        menuOpen = false
    } else {
    	
    }
})
function menu2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    scene.setBackgroundColor(9)
    temperatureSprite = textsprite.create("Temperature: " + ("" + temperature) + " C", 0, 8)
    lightSprite = textsprite.create("Light level: " + ("" + light2) + " units", 0, 8)
    menu = textsprite.create("MeowTools", 0, 8)
    acceleration = textsprite.create("Acceleration", 0, 8)
    temperatureSprite.setText("Temperature")
    lightSprite.setText("Light")
    stopWatch = textsprite.create("Stopwatch", 0, 8)
    timer = textsprite.create("Timer", 0, 8)
    dice = textsprite.create("Dice", 0, 8)
    cursorSprite = textsprite.create(">>", 0, 2)
    menu.setScale(1.5, ScaleAnchor.Middle)
    menu.setPosition(45, 8)
    temperatureSprite.setPosition(53, 24)
    lightSprite.setPosition(35, 37)
    acceleration.setPosition(57, 50)
    stopWatch.setPosition(46, 63)
    timer.setPosition(35, 76)
    dice.setPosition(32, 89)
    cursorSprite.setPosition(8, 24)
    _return = textsprite.create("'B' to return", 0, 2)
    _return.setPosition(80, 114)
    menuOpen = true
    optionOpen = false
    cursorPosition = 0
}
function desktop () {
    scene.setBackgroundColor(4)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    greeting = textsprite.create("Hello Marc!", 0, 7)
    greeting.setPosition(30, 5)
    temperatureSprite = textsprite.create("Temperature: " + ("" + temperature) + "C", 0, 8)
    temperatureSprite.setPosition(58, 95)
    lightSprite = textsprite.create("Light level: " + ("" + light2) + "units", 0, 8)
    lightSprite.setPosition(70, 105)
    greeting.setVelocity(20, 20)
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
    sprites.destroy(menu)
    sprites.destroy(cursorSprite)
    sprites.destroy(_return)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorPosition == 0) {
        cursorSprite.setPosition(9, 37)
        cursorPosition = 1
    } else if (cursorPosition == 1) {
        cursorSprite.setPosition(9, 50)
        cursorPosition = 2
    } else if (cursorPosition == 2) {
        cursorSprite.setPosition(9, 63)
        cursorPosition = 3
    } else if (cursorPosition == 3) {
        cursorSprite.setPosition(9, 76)
        cursorPosition = 4
    } else if (cursorPosition == 4) {
        cursorSprite.setPosition(9, 89)
        cursorPosition = 5
    } else if (cursorPosition == 5) {
        cursorSprite.setPosition(9, 102)
        cursorPosition = 6
    } else if (cursorPosition == 6) {
        cursorSprite.setPosition(9, 24)
        cursorPosition = 0
    }
})
let _return: TextSprite = null
let menu: TextSprite = null
let dice: TextSprite = null
let timer: TextSprite = null
let stopWatch: TextSprite = null
let accelerationZ: TextSprite = null
let accelerationY: TextSprite = null
let accelerationX: TextSprite = null
let acceleration: TextSprite = null
let light2 = 0
let lightSprite: TextSprite = null
let temperature = 0
let temperatureSprite: TextSprite = null
let optionOpen = false
let cursorSprite: TextSprite = null
let cursorPosition = 0
let menuOpen = false
let greeting: TextSprite = null
scene.setBackgroundColor(4)
let mySprite = sprites.create(img`
    .......................................
    .......................................
    .......................................
    .............fff.......................
    .............fff.......................
    ..............f.......f................
    ........f.....f......ff................
    ........ff....f.....ffff...............
    .......ffff...f....fffff...............
    .......ffffffffffffffffff..............
    .......ffffffffffffffffff..............
    .......ffffffffffff111fff..............
    ......ffffffffffff11111ff..............
    ......ffff111ffff1111111ff.............
    ......fff11111fff111f111ff.............
    ......ff1111111ff111f111ff.............
    ......ff111f111ff111111ffff............
    ......ff111f111fff11111ffff............
    ......ff111111ffffffffffffff...........
    ......fff11111fffffffffffffff..........
    ......ffffffffffffffffffffffff.........
    ......fffffffffffffffffffffffff........
    ......ffffffffffffffffffffffffff.......
    ......fffffffffffffffffffffffffff......
    .......ffffffffffffffffffffffffff......
    .......ffffffffffffffffffffffffff......
    .......ffffffffffffffffffffffffff......
    .......ffffffffffffffffffffffffff......
    ........fffffffffffffffffffffffff......
    ........fffffffffffffffffffffffff......
    ........fffffffffffffffffffffffff......
    .........fffffffffffffffffffffff.......
    ..........fffffffffffffffffffff........
    ...........ffffffffffffffffffff........
    ............fffffffffffffffff..........
    ..............ffffffffffffff...........
    ................fffffffff..............
    .......................................
    .......................................
    .......................................
    `, SpriteKind.Player)
mySprite.setBounceOnWall(true)
mySprite.setVelocity(25, 25)
greeting = textsprite.create("Hello Marc!", 0, 7)
greeting.setPosition(30, 5)
greeting.setVelocity(20, 20)
greeting.setBounceOnWall(true)
greeting.setScale(1.5, ScaleAnchor.Middle)
menuOpen = false
cursorPosition = 0
game.onUpdateInterval(500, function () {
    temperature = controller.temperature(ControllerTemperatureUnit.Celsius)
    light2 = controller.lightLevel()
})
game.onUpdateInterval(500, function () {
    if (cursorPosition == 2 && optionOpen == true) {
        accelerationX.setText("X:" + ("" + controller.acceleration(ControllerDimension.X)))
        accelerationY.setText("Y:" + ("" + controller.acceleration(ControllerDimension.Y)))
        accelerationZ.setText("Z:" + ("" + controller.acceleration(ControllerDimension.Z)))
    }
})
