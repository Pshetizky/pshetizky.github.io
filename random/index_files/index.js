// Array 001 english to numbers
var engtonum = [
"'a'","'A'",
"'b'","'B'",
"'c'","'C'",
"'d'","'D'",
"'e'","'E'",
"'f'","'F'",
"'g'","'G'",
"'h'","'H'",
"'i'","'I'",
"'j'","'j'",
"'k'","'K'",
"'l'","'L'",
"'m'","'M'",
"'n'","'N'",
"'o'","'O'",
"'p'","'P'",
"'q'","'Q'",
"'r'","'R'",
"'s'","'S'",
"'t'","'T'",
"'u'","'U'",
"'v'","'V'",
"'w'","'W'",
"'x'","'X'",
"'y'","'Y'",
"'z'","'Z'",
"'0'","'1'","'2'","'3'","'4'","'5'","'6'","'7'","'8'","'9'"
];
function getLet() {
	return engtonum[
		Math.floor(Math.random() * engtonum.length)
	];
}
document.documentElement.style.setProperty('--let001', getLet());
document.documentElement.style.setProperty('--let002', getLet());
document.documentElement.style.setProperty('--let003', getLet());
document.documentElement.style.setProperty('--let004', getLet());
document.documentElement.style.setProperty('--let005', getLet());
document.documentElement.style.setProperty('--let006', getLet());
document.documentElement.style.setProperty('--let007', getLet());
document.documentElement.style.setProperty('--let008', getLet());
document.documentElement.style.setProperty('--let009', getLet());
document.documentElement.style.setProperty('--let010', getLet());
document.documentElement.style.setProperty('--let011', getLet());
document.documentElement.style.setProperty('--let012', getLet());
