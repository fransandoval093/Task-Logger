
// Get the id of current day and set the day inside of the html
bird = moment()
feathers = bird.format("dddd [the] Do [of] MMMM	")
$("#currentDay").html(feathers);

$("#link").attr("href");                    // get an attribute
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
    createItem(tempus,duty);
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

// THIS IS IMPORTANT
function createItem(t,d) {
	localStorage.setItem(t, d); 
}

function getValue() {
	return localStorage.getItem('1AM');  
} // Gets the value of 'nameOfItem' and returns it
console.log(getValue()); //'value';

localStorage.setItem('user_name', 'Rohit'); //store a key/value
var retrievedUsername = localStorage.getItem('user_name'); //retrieve the key

console.log(retrievedUsername);