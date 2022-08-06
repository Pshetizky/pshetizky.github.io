// Array 004 Padding
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
document.documentElement.style.setProperty('--padding002', getPaddings());
// Array 005 Margins
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
document.documentElement.style.setProperty('--margin002', getMargins());
// Array 006 Exit engish
var houses = [
'"Close"','"X"','"Exit"','"Home"','"Off"','"Backwards"','"Cancel"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses001', getHouses());
// Array 007 Exit Hebrew
var houses = [
'"תסגור"','"X"','"יציאה"','"הביתה"','"לכבה"','"אחורה"','"לבטל"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses002', getHouses());
// Array 008 Exit Arabic
var houses = [
'"قريب"','"X"','"إلغاء"','"إلى الوراء"','"إيقاف"','"الصفحة الرئيسية"','"خروج"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses003', getHouses());
// Array 009 Exit Russian
var houses = [
'"Близко"','"X"','"Выход"','"Дом"','"От"','"Задом"','"Отмена"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses004', getHouses());
// Array 010 Gradient
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
document.documentElement.style.setProperty('--kannat1', getGradient001());
document.documentElement.style.setProperty('--kannat2', getGradient001());

// Array 011 Radius
var radius001 = [
"0%","10%","25%","50%"];
function getRadius001() {
	return radius001[
		Math.floor(Math.random() * radius001.length)
	];
}
document.documentElement.style.setProperty('--giz1', getRadius001());
document.documentElement.style.setProperty('--giz2', getRadius001());
// Array 011 Radius
var dan = [
"40px 17px 12px auto",
"40px 12px 12px auto",
"40px 16px 12px auto",
"40px 25px 14px auto"
];
function getdan() {
	return dan[
		Math.floor(Math.random() * dan.length)
	];
}
document.documentElement.style.setProperty('--laav1', getdan());
document.documentElement.style.setProperty('--laav2', getdan());
