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