/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: Sep 2024
 * This program plays Cookie CLicker
 * 
*/

let CookieNumber: number
basic.clearScreen()

CookieNumber = 0
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
        CookieNumber =  CookieNumber + 1
        basic.showString(CookieNumber.toString())
})

input.onButtonPressed(Button.B, function () {
    CookieNumber = 0
    basic.showString(CookieNumber.toString())
})