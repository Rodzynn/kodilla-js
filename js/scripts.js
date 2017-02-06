// plik scripts.js

// *************** Zadanie 1 - prompt ***************

var name = prompt('Wpisz swoje imię'); // deklaracja zmiennej oi przypisanie jej wartości
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

// *************** Zadanie 2 - komentarze ***************

// var name = prompt('Wpisz swoje imię'); // deklaracja zmiennej oi przypisanie jej wartości
// alert('Witaj, ' + name);
/* console.log('Witaj, ' + name); */

// *************** Zadanie 3 - Pole trójkąta ***************

var a = prompt("podaj bok a"), 
h = prompt ("podaj bok b"),
triangleArea;

triangleArea = a * h / 2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea);

// *************** Zadanie 4 - Instrukcje warunkowe w praktyce ***************

var x = prompt("Podaj wartość x"),
y = prompt("Podaj wartość y");

var value = (x*x) + (2 * x * y) - (y*y);
console.log(value);

if (value > 0) {
console.log('Wartość działania jest liczbą dodatnią');
}

else if (value < 0) {
console.log('Wartość działania jest liczbą ujemną');
}

else {
console.log('Wartość działania wynosi ' + value);
}