let temperature = 0
let pressure = 0
basic.forever(() => {
    pressure = BMP280.pressure()
    temperature = BMP280.temperature()
    serial.writeNumber(pressure)
    serial.writeString(" hpa, ")
    serial.writeNumber(temperature)
    serial.writeLine("C.")
    basic.pause(1000)
})

