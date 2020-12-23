radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    if (相手の手 == 0) {
        相手の手 = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    if (自分の手 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        自分の手 = 2
        radio.sendNumber(自分の手)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (自分の手 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        自分の手 = 1
        radio.sendNumber(自分の手)
    }
})
input.onButtonPressed(Button.B, function () {
    if (自分の手 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        自分の手 = 3
        radio.sendNumber(自分の手)
    }
})
let 引いた数字 = 0
let 相手の手 = 0
let 自分の手 = 0
radio.setGroup(10)
自分の手 = 0
相手の手 = 0
basic.clearScreen()
basic.forever(function () {
    if (自分の手 != 0 && 相手の手 != 0) {
        引いた数字 = 相手の手 - 自分の手
        if (引いた数字 == 1 || 引いた数字 == -2) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (引いた数字 == -1 || 引いた数字 == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showLeds(`
                    . . # . .
                    # # # # #
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            }
        }
        basic.pause(2000)
        basic.clearScreen()
        自分の手 = 0
        相手の手 = 0
    }
})
