/* ##################################################
   #       Get Random Line From File for Silv       #
   #          Script Created by: Danno3817          #
   #           © Danno3817 2020 - present           #
   ################################################## 
  */
const fs = require('fs');
let array = [], value;
const filename = './test.txt'
const filename2 = './test2.txt'
  
const file = fs.readFileSync(filename).toString().split('\n') // Get the total line content of the file
   
// Loop through the list
for (i = 0; i < file.length; i++) {
  array.push(file[i]); // push all lines to the file
}

this.storeValue(array.length, 1 ,"fileLengthValue", cache) // Store the length of the array
   
// Generate a random number based on the length of the array, the -1 gets the right value from the list
// This is important because it'll error if the value is longer than the array length
const result = Math.floor(Math.random() * array.length) - 1

value = array[result] 
this.storeValue(array[result], 1 ,"fileLineValue", cache) // Store the value for later use
   
fs.unlinkSync(filename); // Delete the old data
   
// Loop through the array
for (i of array) {
  if (array[(array.length - 1)] === i) {
    fs.appendFileSync(filename, i)
  } else {
    fs.appendFileSync(filename, `${i}\n`)
  }
}
   
// Write the random line to the new file 
// No idea why you would do this but thats what you said to do so its here
fs.writeFileSync(filename2, value);
