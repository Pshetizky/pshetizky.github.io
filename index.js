// DARK COLORS
var colors001 = [
"#643a3a","#360d4e","#14045a",
"#563446"];
function getColors() {
	return colors001[
		Math.floor(Math.random() * colors001.length)
	];
}
document.documentElement.style.setProperty('--color001', getColors());
document.documentElement.style.setProperty('--color002', getColors());

// LIGHT COLORS
var colors001 = [
"#ef9a9a","#e1bee7","#ede7f6",
"#f8bbd0"];
function getColors() {
	return colors001[
		Math.floor(Math.random() * colors001.length)
	];
}
document.documentElement.style.setProperty('--color003', getColors());
document.documentElement.style.setProperty('--color004', getColors());

// WALLPAPERS Dark
var walls = ["url('./d/wallpaper001.png')","url('./d/wallpaper002.png')"];
function getWalls() {
	return walls[
		Math.floor(Math.random() * walls.length)
	];
}
document.documentElement.style.setProperty('--wall001', getWalls());
// WALLPAPERS Light
var walls = ["url('./d/wallpaper003.png')","url('./d/wallpaper004.png')"];
function getWalls() {
	return walls[
		Math.floor(Math.random() * walls.length)
	];
}
document.documentElement.style.setProperty('--wall002', getWalls());
