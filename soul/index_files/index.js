// array 001 name001 english
var names = [
'"Named after Yehuda Abarbanel"',
'"Geha"',
'"Beer Jacob"',
'"Ness Ziona"',
'"Named after Suraski"'
];
function getNames() {
	return names[
		Math.floor(Math.random() * names.length)
	];
}
document.documentElement.style.setProperty('--a001', getNames());
// array 002 a002 hebrew
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
document.documentElement.style.setProperty('--a002', getNames());
// array 003 a003 arabic
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
document.documentElement.style.setProperty('--a003', getNames());
// array 004 a004 russian
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
document.documentElement.style.setProperty('--a004', getNames());
