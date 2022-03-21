var currentDayText = document.querySelector("#currentDay");


var momentText = moment().format('dddd, MMMM Do');
currentDayText.innerText = momentText;

var hour = moment().hour() // current hour => 11
// hour will change depending on the current time
// console.log(hour); // options for hour: 9, 10, 11, 12, 1, 2, 3, 4, 5

// hour = 9; // 9

// set current hour to RED
var hourTextArea = document.querySelector("#hour" + hour); // #hour13
hourTextArea.classList.add("present");


// sets the boxes to green
var start = hour + 1 // => 13 + 1 = 14
var end = 17
for (let index = start; index <= end; index++) { // 14, 15, 16, 17
    document.querySelector("#hour" + index).classList.add("future");
}

/*
//    1.        2.       4.
for (let i = 1; i < 3; i++) {
    // 3.
    console.log(i); // => print 1
}
console.log("done");
// 1. 2. 3. 4. 2. 3. 4. 2. 3. 4. 2. 3. 4.
*/


[9, 10, 11, 12, 13, 14, 15, 16, 17].forEach(num => {
    // Saving into local storage
    var textArea = document.querySelector("#hour" + num);
    var saveButton = document.querySelector("#hour" + num + "-save-button"); // 
    saveButton.addEventListener("click", () => {
        console.log(textArea.value);
        var key = num;
        var value = textArea.value;
        localStorage.setItem(key, value);
    });

    // Displaying from local storage
    var value = localStorage.getItem(num);
    console.log(value);
    textArea.value = value;
})



/*
// Saving into local storage
var hour10textArea = document.querySelector("#hour10");
var hour10saveButton = document.querySelector("#hour10-save-button");
hour10saveButton.addEventListener("click", () => {
    console.log(hour10textArea.value);
    var key = "10am";
    var value = hour10textArea.value;
    localStorage.setItem(key, value);
});

// Displaying from local storage
var hour10value = localStorage.getItem("10am");
console.log(hour10value);
hour10textArea.value = hour10value;
*/

