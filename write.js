

// create a websoite tha writes/displays a heading character by character

// e.g: THis is my Heading

// steps to consider
// 1: see how we can make a sleep/delay function 
// 2: see how to display infomation on the document window

// Displaying information/data on the document window
// 1: using document.write function
// 2: using console.log function
// 3: using innerHTML

// javascript syntax
// every statement ends with a semi colon
// declare variables
// var and let


window.onload = (e) => {
	table = document.getElementById('table');
	table.style.cursor = 'pointer';
	
	let i = 5;
	while( i < 22){
		tr = document.createElement('tr');
		td1 = document.createElement('td');
		td2 = document.createElement('td');
		td3 = document.createElement('td');
		td1.innerHTML = i
		td2.innerHTML = name + i
		td3.innerHTML = sex + i
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.getElementsByTagName('tbody')[0].appendChild(tr)
		i++
	}
	// table.tbody.appendChild(tr);
}


let sex = 'Male';
let age = '20';
var name = 'Paul';
var surname = 'Oyedokun';
var full_name = name + ' ' + surname;
// console.log(full_name);
// console.log('My full name is ' + full_name + '.');

// build up strings out of several strings
// escpae sequence/characters
// \t add a tab
// \n add a new line/\
// \r go to the begining of the line

let stringText = `Baa Baa Black Sheep\n`
stringText	+= "_____________________"
stringText += "\n\nBaa Baa Black Sheep"
console.log(stringText);




