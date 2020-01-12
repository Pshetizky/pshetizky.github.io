var starts = [
"matrix(1, 0, 0, 1, 100, 0)",
"matrix(1, 0, 0, 1, 90, -10)",
"matrix(1, 0, 0, 1, 80, -20)",
"matrix(1, 0, 0, 1, 70, -30)",
"matrix(1, 0, 0, 1, 60, -40)",
"matrix(1, 0, 0, 1, 50, -50)",
"matrix(1, 0, 0, 1, 40, -60)",
"matrix(1, 0, 0, 1, 30, -70)",
"matrix(1, 0, 0, 1, 20, -80)",
"matrix(1, 0, 0, 1, 10, -90)",
"matrix(1, 0, 0, 1, 0, -100)"
];
var random_starts = starts[Math.floor(Math.random() * starts.length)];
document.getElementById("body").style.transform = random_starts;
