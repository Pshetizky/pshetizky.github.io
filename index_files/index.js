// array 001 colors
var chromee = [
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
	return chromee[
		Math.floor(Math.random() * chromee.length)
	];
}
document.documentElement.style.setProperty('--color001', getColors());
document.documentElement.style.setProperty('--color002', getColors());
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
