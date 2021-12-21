const inputs = document.querySelectorAll(".controls input")
const hat = document.querySelectorAll(".hat-center")
const eyes = document.querySelectorAll(".eye")
const pupils = document.querySelectorAll(".pupil")
const nose = document.querySelectorAll(".nose")
const scarf = document.querySelectorAll(".scarf-center, .scarf-right")
const buttons = document.querySelectorAll(".button")
var elements = []
elements["hat-color"] = hat
elements["eye-color"] = eyes
elements["nose-color"] = nose
elements["scarf-color"] = scarf
elements["button-color"] = buttons

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function (e) {
    OutputValue(e)
  })
}

function OutputValue(e) {
  UpdateColors(e.target.id, e.target.value)
}

function UpdateColors(colorName, colorValue) {
  if (colorName == "eye-color") {
    let pupilsColor = window.getComputedStyle(pupils[0]).backgroundColor
    let ratio = calculateRatio(colorValue, pupilsColor)
    if (ratio >= 1 / 3) {
      ReversePupilColors(pupilsColor)
    }
  }
  for (let i = 0; i < elements[colorName].length; i++) {
    if (colorName == "nose-color") {
      elements[colorName][i].style.borderColor = `transparent transparent transparent ${colorValue}`
    } else {
      elements[colorName][i].style.backgroundColor = colorValue
    }
  }
}
// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
function ReversePupilColors(pupilsColor) {
  let newColor
  if (pupilsColor == "rgb(0, 0, 0)") {
    newColor = "#ffffff"
  } else {
    newColor = "#000000"
  }
  for (let i = 0; i < pupils.length; i++) {
    pupils[i].style.backgroundColor = newColor
  }
}
// function from https://stackoverflow.com/a/5624139/3695983
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// function from https://stackoverflow.com/a/9733420/3695983                     
function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ?
      v / 12.92 :
      Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateRatio(color1, color2rgb) {

  // read the colors and transform them into rgb format
  // const color1 = document.querySelector("#color-1").value;
  // const color2 = document.querySelector("#color-2").value;
  const color1rgb = hexToRgb(color1);
  //const color2rgb = hexToRgb(color2);
  let rgbArr = color2rgb.substring(4, color2rgb.length - 1).replace(/ /g, '').split(',');

  // calculate the relative luminance
  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(rgbArr[0], rgbArr[1], rgbArr[2]);

  // calculate the color contrast ratio
  const ratio = color1luminance > color2luminance ?
    ((color2luminance + 0.05) / (color1luminance + 0.05)) :
    ((color1luminance + 0.05) / (color2luminance + 0.05));

  return ratio;
}