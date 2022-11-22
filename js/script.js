// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-02/sw.js", {
    scope: "/ICS20-Unit-5-02/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let buttonPositiveChecked = document.getElementById("positive").checked

  if (buttonPositiveChecked == true) {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  } else {
    let randomNumber = Math.floor(Math.random() * -6) - 1
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  }
}
