# BMP280

makecode BMP280 Digital Pressure Sensor package for micro:bit  

Author: shaoziyang  
Date:   2018.Mar  

![](https://raw.githubusercontent.com/microbit-makecode-packages/BMP280/master/icon.png)  
  
![](https://raw.githubusercontent.com/microbit-makecode-packages/BMP280/master/bmp280.jpg)

## usage

open your microbit makecode project, in Add Package, paste  

https://github.com/microbit-makecode-packages/BMP280  

to search box then search.

## I2C Address  

- 0x76/0x77  

## API

- function pressure()  
get pressure in hpa  

- function temperature()  
return temperature in Celsius.

- function PowerOn()
turn on BMP280.

- function PowerOff()  
goto sleep mode  

- function Address(addr: BMP280_I2C_ADDRESS)  
set BMP280's I2C address. addr may be:  
  - BMP280_I2C_ADDRESS.ADDR_0x76
  - BMP280_I2C_ADDRESS.ADDR_0x77

## Demo

![](https://raw.githubusercontent.com/microbit-makecode-packages/BMP280/master/demo.jpg)

## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn)
