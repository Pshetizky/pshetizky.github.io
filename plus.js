// EXITS ENGLISH
var houses = [
'"pshetizky"','"exit"','"homepage"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses001', getHouses());

// EXITS HEBREW
var houses = [
'"תסגור"','"פשטיצקי"','"דף הבית"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses002', getHouses());

// EXITS ARABIC
var houses = [
'"قريب"','"X"','"إلغاء"','"إلى الوراء"','"إيقاف"','"الصفحة الرئيسية"','"خروج"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses003', getHouses());

// EXITS RUSSIAN
var houses = [
'"Близко"','"X"','"Выход"','"Дом"','"От"','"Задом"','"Отмена"'
];
function getHouses() {
	return houses[
		Math.floor(Math.random() * houses.length)
	];
}
document.documentElement.style.setProperty('--houses004', getHouses());
