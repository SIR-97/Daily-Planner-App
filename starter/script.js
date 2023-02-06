// Display the current day at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Define standard business hours
const businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Add timeblocks for standard business hours
businessHours.forEach(hour => {
  // Create a timeblock element
  const timeblock = $("<div>").addClass("time-block row");

// Created a time class 
   const time = $("<div>")
   .addClass("col-2 hour")
   .text(`${hour}:00`);

 // Create a description class

 const description = $("<textarea>")
   .addClass("col-8 description")
   .attr("data-time", hour);

 // Appended the time and description classes to the timeblock
 timeblock.append(time, description);



})