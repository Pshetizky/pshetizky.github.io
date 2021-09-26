// array 001 sets001 english
var sets = [
'"What makes me happy in my life now?"',
'"What excites me in my life now?"',
'"What gives me gratitude in my life now?"',
'"Who do I love in my life now?"',
'"Who loves me in my life now?"',
'"What habit do I think I am obligated to create in my life now?"',
'"What subconscious beliefs am I obligated to create in my life now?"'
];
function getSets() {
	return sets[
		Math.floor(Math.random() * sets.length)
	];
}
document.documentElement.style.setProperty('--sets001', getSets());
// array 002 name002 hebrew
var sets = [
'"מה עושה אותי שמחה עכשיו"',
'"מה אני אעשה כדי שאני ארדם"',
'"אני שמחה ממה שאני עושה"',
'"אני אוהבת את כולם"',
'"אני מאוד נרגשת"',
'"תודה אני אומרת"',
'"זה ההרגל שלי"',
'"זאת אמונתי"'
];
function getNames() {
	return sets[
		Math.floor(Math.random() * sets.length)
	];
}
document.documentElement.style.setProperty('--sets002', getSets());
// array 003 name003 arabic
var sets = [
'"ما الذي يجعلني سعيدا في حياتي الآن؟"',
'"ما الذي يثيرني في حياتي الآن؟"',
'"ما الذي يعطيني الامتنان في حياتي الآن؟"',
'"من أحب في حياتي الآن؟"',
'"من يحبني في حياتي الآن؟"',
'"ما هي العادة التي أعتقد أنني ملزمة بخلقها في حياتي الآن؟"',
'"ما المعتقدات اللاواعية التي ألتزم بخلقها في حياتي الآن؟"'
];
function getNames() {
	return sets[
		Math.floor(Math.random() * sets.length)
	];
}
document.documentElement.style.setProperty('--sets003', getSets());
// array 004 name004 russian
var sets = [
'"Что делает меня счастливым в моей жизни сейчас?"',
'"Что меня сейчас волнует в жизни?"',
'"Что дает мне благодарность в моей жизни сейчас?"',
'"Кого я люблю в своей жизни сейчас?"',
'"Кто любит меня в моей жизни сейчас?"',
'"Какую привычку я думаю, я обязан создать в моей жизни сейчас?"',
'"Какие подсознательные убеждения я обязан создать в своей жизни сейчас?"'
];
function getNames() {
	return sets[
		Math.floor(Math.random() * sets.length)
	];
}
document.documentElement.style.setProperty('--sets004', getSets());
