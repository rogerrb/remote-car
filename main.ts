input.onButtonPressed(Button.A, function () {
    remotecontrol = 1
})
input.onButtonPressed(Button.B, function () {
    remotecontrol = 0
})
radio.onReceivedValue(function (name, value) {
    if (remotecontrol == 0) {
        if (name == "retning") {
            retning = value
        } else if (name == "fart") {
            fart = value
        }
        led.plot(fart, retning)
        bitbot.driveMilliseconds(600, 100)
    }
})
let fart = 0
let retning = 0
let remotecontrol = 0
bitbot.select_model(BBModel.XL)
remotecontrol = 0
let Radiogruppe = 9
radio.setGroup(Radiogruppe)
basic.showNumber(Radiogruppe)
basic.forever(function () {
    if (remotecontrol == 1) {
        radio.sendValue("retning", input.rotation(Rotation.Roll))
        radio.sendValue("fart", input.rotation(Rotation.Pitch))
        basic.pause(1000)
    }
})
