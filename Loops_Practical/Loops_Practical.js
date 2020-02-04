console.log('test');

//Watch out for infinite loops, happens when condtional never turns to false.

//WHILE LOOPS, once conditional turn false it leaves the loop
while(conditional) {
	//CODING STATEMENTS
}

let index = 0;
const max = 10;

while(index < max) {
	console.log('in while loop. Index:', index);
	index++;
}

console.log('index after while loop:', index);

//FOR LOOPS
for(let i=0; i < max; i++) {
	console.log('in for loop. i:', i);
}
//i is out of scope, error
console.log("outside of for loop:", i);

//Card example
let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

//FOR LOOPS
//Good for looping through arrays using an index
for(let i=0; i<hand.length; i++) {
	console.log('for loop', hand[i]);
	if(hand[i] === '9') {
		console.log('match!!');
	}
}

//FOR IN LOOPS
//Good for looping through arrays using an index
for(i in hand) {
	console.log('for in loop', hand[i]);
	if (hand[i] === '9') {
		console.log('match!!!!');
	}
}

//FOR OF LOOPS, 
//Shows objects with out having to create an index
for(card of hand) {
	console.log("for of loop", card);
	if(card === '9') {
		console.log('match!!!!')
	}
}









