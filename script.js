
// Get the id of current day and set the day inside of the html
bird = moment()
wings = bird.format("dddd [the] Do [of] MMMM	")
$("#currentDay").html(wings);
feathers = bird.format("H");
console.log("++The hour is++");
console.log(feathers);

function oogway() {

    present = "col-sm-4 col-md-6 present"
    future = "col-sm-4 col-md-6 future"
    past = "col-sm-4 col-md-6 past"

    var ppfContainer = $("div.col-md-6").attr("class",future);
    // var presentContainer = ppfContainer[feathers];
    // presentContainer.attr("class","past");
    console.log("++PastpresentFutCont++");
    console.log(ppfContainer);
    
}

oogway();

$("#link").attr("href",'https://htmlg.com'); // set attribute

// var skull = $("div:nth-child(2)");
// var taskEl = $("div.col-md-6")
// // console.log(skull);
// console.log("++++++");
// console.log(timeEl);


$("#1AMbtn").click(function(){
    var taskInputEl = $("#1AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    console.log("++time and duty+++");
    console.log(tempus);
    console.log(duty);
    createItem(tempus,duty);
    // pullTask(tempus);
})

$("#2AMbtn").click(function(){
    console.log("is this working?");
    var taskInputEl = $("#2AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#3AMbtn").click(function(){
    var taskInputEl = $("#3AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#4AMbtn").click(function(){
    var taskInputEl = $("#4AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#5AMbtn").click(function(){
    var taskInputEl = $("#5AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#6AMbtn").click(function(){
    var taskInputEl = $("#6AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#7AMbtn").click(function(){
    var taskInputEl = $("#7AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#8AMbtn").click(function(){
    var taskInputEl = $("#8AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#9AMbtn").click(function(){
    var taskInputEl = $("#9AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#10AMbtn").click(function(){
    var taskInputEl = $("#10AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#11AMbtn").click(function(){
    var taskInputEl = $("#11AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#12PMbtn").click(function(){
    var taskInputEl = $("#12PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#1PMbtn").click(function(){
    var taskInputEl = $("#1PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#2PMbtn").click(function(){
    var taskInputEl = $("#2PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#3PMbtn").click(function(){
    var taskInputEl = $("#3PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#4PMbtn").click(function(){
    var taskInputEl = $("#4PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#5PMbtn").click(function(){
    var taskInputEl = $("#5PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#6PMbtn").click(function(){
    var taskInputEl = $("#6PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#7PMbtn").click(function(){
    var taskInputEl = $("#7PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#8PMbtn").click(function(){
    var taskInputEl = $("#8PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#9PMbtn").click(function(){
    var taskInputEl = $("#9PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#10PMbtn").click(function(){
    var taskInputEl = $("#10PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#11PMbtn").click(function(){
    var taskInputEl = $("#11PM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})
$("#12AMbtn").click(function(){
    var taskInputEl = $("#12AM");
    tempus = taskInputEl.attr("id");
    duty = taskInputEl.val();
    createItem(tempus,duty);
})

// Things to save onto local storage based on time (t) and duty (d)
function createItem(t,d) {
	localStorage.setItem(t, d); 
}

// function getValue() {
// 	return localStorage.getItem('1AM');  
// } // Gets the value of 'nameOfItem' and returns it
// console.log(getValue()); //'value';

function pullTask(whichHour) {
    var emptyInput = "#" + whichHour;
    taskInputEl = $(emptyInput)
    var retrievedTask = localStorage.getItem(whichHour); //retrieve the key
    taskInputEl.val(retrievedTask);
}
// TODO(FS): The worst possible way to retrieve the values and overwrite them from local storage
pullTask("1AM");
pullTask("2AM");
pullTask("3AM");
pullTask("4AM");
pullTask("5AM");
pullTask("6AM");
pullTask("7AM");
pullTask("8AM");
pullTask("9AM");
pullTask("10AM");
pullTask("11AM");
pullTask("12PM");
pullTask("1PM");
pullTask("2PM");
pullTask("3PM");
pullTask("4PM");
pullTask("5PM");
pullTask("6PM");
pullTask("7PM");
pullTask("8PM");
pullTask("9PM");
pullTask("10PM");
pullTask("11PM");
pullTask("12AM");
