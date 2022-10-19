var rainbowColor;
(function (rainbowColor) {
    rainbowColor[rainbowColor["violet"] = 1] = "violet";
    rainbowColor[rainbowColor["indigo"] = 2] = "indigo";
    rainbowColor[rainbowColor["blue"] = 3] = "blue";
    rainbowColor[rainbowColor["green"] = 4] = "green";
    rainbowColor[rainbowColor["yellow"] = 5] = "yellow";
    rainbowColor[rainbowColor["orange"] = 6] = "orange";
    rainbowColor[rainbowColor["red"] = 7] = "red";
})(rainbowColor || (rainbowColor = {}));
let color = rainbowColor.blue;
console.log(color);
console.log(rainbowColor[color]);
//# sourceMappingURL=23_enum.js.map