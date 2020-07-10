// array 001 colors
var colors001 = [
"#f44336",
"#e91e63",
"#9c27b0",
"#673ab7",
"#3f51b5",
"#2196f3",
"#03a9f4",
"#00bcd4",
"#009688",
"#4caf50",
"#8bc34a",
"#cddc39",
"#fbc02d",
"#ffc107",
"#ff9800",
"#ff5722",
"#795548",
"#9e9e9e",
"#607d8b"];
function getColors() {
	return colors001[
		Math.floor(Math.random() * colors001.length)
	];
}
document.documentElement.style.setProperty('--color001', getColors());
document.documentElement.style.setProperty('--color002', getColors());
document.documentElement.style.setProperty('--color003', getColors());
// array 002 wallpapers
var walls = ["url('../index_files/wallpaper001.png')","url('../index_files/wallpaper002.png')"];
function getWalls() {
	return walls[
		Math.floor(Math.random() * walls.length)
	];
}
document.documentElement.style.setProperty('--wall001', getWalls());
// array 003 themes
var themes = ["#fafafa","#212121"];
function getThemes() {
	return themes[
		Math.floor(Math.random() * themes.length)
	];
}
document.documentElement.style.setProperty('--theme001', getThemes());
// array 004
var paddings = [
"72px 10px",
"54px 24px",
"32px 48px",
"5px 72px",
"0px 90px"];
function getPaddings() {
	return paddings[
		Math.floor(Math.random() * paddings.length)
	];
}
document.documentElement.style.setProperty('--padding001', getPaddings());
// array 005 margins
var margins = [
"50px 90px",
"90px 50px",
"30px 110px",
"110px 30px",
"30px 100px",
"100px 30px",
"80px 60px",
"60px 80px",
"75px 75px",
"130px 10px",
"10px 130px",
"10px 10px"];
function getMargins() {
	return margins[
		Math.floor(Math.random() * margins.length)
	];
}
document.documentElement.style.setProperty('--margin001', getMargins());
// array 006 Houses english
var houses = [
'"Close"','"X"','"Exit"','"Home"','"Off"','"Backwards"','"Cancel"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses001', getHouses());
// array 007 Houses hebrew
var houses = [
'"תסגור"','"X"','"יציאה"','"הביתה"','"לכבה"','"אחורה"','"לבטל"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses002', getHouses());
// array 008 Houses arabic
var houses = [
'"قريب"','"X"','"إلغاء"','"إلى الوراء"','"إيقاف"','"الصفحة الرئيسية"','"خروج"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses003', getHouses());
// array 009 Houses russian
var houses = [
'"Близко"','"X"','"Выход"','"Дом"','"От"','"Задом"','"Отмена"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses004', getHouses());
// array 010 gradient001
var gradient001 = [
"linear-gradient(#F44336, #B71C1C)",
"linear-gradient(#E91E63, #880E4F)",
"linear-gradient(#9C27B0, #4A148C)",
"linear-gradient(#3f51b5, #1A237E)",
"linear-gradient(#2196F3, #0D47A1)",
"linear-gradient(#03A9F4, #01579B)",
"linear-gradient(#00bcd4, #006064)",
"linear-gradient(#009688, #004D40)",
"linear-gradient(#4CAF50, #1B5E20)",
"linear-gradient(#8BC34A, #33691E)",
"linear-gradient(#CDDC39, #827717)",
"linear-gradient(#FFEB3B, #F57F17)",
"linear-gradient(#ffc107, #FF6F00)",
"linear-gradient(#FF9800, #E65100)",
"linear-gradient(#FF5722, #BF360C)",
"linear-gradient(#795548, #3e2723)",
"linear-gradient(#9E9E9E, #212121)",
"linear-gradient(#607D8B, #263238)"];
function getGradient001() {
	return gradient001[
		Math.floor(Math.random() * gradient001.length)
	];
}
document.documentElement.style.setProperty('--grads001', getGradient001());
// array 011 radius001
var radius001 = [
"10%","13%","16%","19%"];
function getRadius001() {
	return radius001[
		Math.floor(Math.random() * radius001.length)
	];
}
document.documentElement.style.setProperty('--radius001', getRadius001());
document.documentElement.style.setProperty('--radius002', getRadius001());
document.documentElement.style.setProperty('--radius003', getRadius001());
document.documentElement.style.setProperty('--radius004', getRadius001());
