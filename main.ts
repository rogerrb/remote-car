radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    if (name == "retning") {
        retning = value
    } else if (name == "fart") {
        fart = value
    }
    bitbot.driveMilliseconds(fart, 100)
})
let fart = 0
let retning = 0
let Radiogruppe = 9
radio.setGroup(Radiogruppe)
basic.showNumber(Radiogruppe)
basic.forever(function () {
    radio.sendValue("retning", input.rotation(Rotation.Roll))
    radio.sendValue("fart", input.rotation(Rotation.Pitch))
    basic.pause(1000)
})
