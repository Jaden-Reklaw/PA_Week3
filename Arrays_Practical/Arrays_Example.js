console.log('test');

//Example of Array
let bagel = ['bacon', 'lettuce', 'tomato'];

//length of bagel array is 3
bagel.length;

//Accessing array items
//Index starts at 0 for the first item
bagel[0]; //bacon
bagel[1]; //lettuce
bagel[2]; //tomato

bagel[9]; //undefined since there is no item at 9

// array.length - 1 gives you the last index in the array

//Changing the value of an array
bagel[0] = 'maple bacon';

//indexOf is used to check if an item is in the array
bagel.indexOf('tomato'); //returns 2
bagel.indexOf('lettuce'); //returns 1
bagel.indexOf('maple bacon'); //returns 0

//Things that are not in the array will return a -1
bagel.indexOf('mustard'); //returns -1

//Adding to the end of array using Push method
bagel.push('mustard'); //adds mustard to the end of the array

//Removing the last item of an array using Pop method
bagel.pop(); //returns the value of mustard

//Adding to the beginning of the array using unshift method
bagel.unshift('asiago'); //adds asiago to index 0

//Removing to the beginning of the array using shift method
bagel.shift(); //removes asiago from the start of the array

//Add mayo and asiago to the end of the sandwhich
bagel.push('mayo');
bagel.push('asiago');

//Add sesame to the beginning of the sandwhic
bagel.unshift('sesame');







