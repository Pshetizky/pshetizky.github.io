// array 001 name001 english
var names = [
'"named after Yehuda Abarbanel"',
'"Geha"',
'"Beer Jacob"',
'"Ness Ziona"',
'"named after Suraski"'
];
function getNames() {
	return names[
		Math.floor(Math.random() * names.length)
	];
}
document.documentElement.style.setProperty('--name001', getNames());
// array 002 name002 hebrew
var names = [
'"על-שם יהודה אברבנאל"',
'"גהה"',
'"באר יעקב"',
'"נס ציונה"',
'"על-שם סוראסקי"'
];
function getNames() {
	return names[
		Math.floor(Math.random() * names.length)
	];
}
document.documentElement.style.setProperty('--name002', getNames());
// array 003 name003 arabic
var names = [
'"أباربانيل على اسم"',
'"جاها"',
'"بير يعقوب"',
'"نيس زيونا"',
'"أباربانيل سوراسكي"'
];
function getNames() {
	return names[
		Math.floor(Math.random() * names.length)
	];
}
document.documentElement.style.setProperty('--name003', getNames());
// array 004 name004 russian
var names = [
'"Там Абарбанель"',
'"Геха"',
'"Пиво Джейкоб"',
'"Несс Циона"',
'"Там Сураски"'
];
function getNames() {
	return names[
		Math.floor(Math.random() * names.length)
	];
}
document.documentElement.style.setProperty('--name004', getNames());
