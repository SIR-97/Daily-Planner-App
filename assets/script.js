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

  // Determine if the timeblock is in the past, present, or future
  if (hour < moment().hour()) {
    description.addClass("past");
  } else if (hour === moment().hour()) {
    description.addClass("present");
  } else {
    description.addClass("future");
  }

  // Create a save button class
  const saveBtn = $("<button>")
    .addClass("col-2 saveBtn fas fa-save")
    .attr("data-time", hour);

  // Add the save button to the timeblock
  timeblock.append(saveBtn);

  // Add the timeblock to the container
  $(".container").append(timeblock);

});

// Save the contents of a timeblock
$(".saveBtn").on("click", function() {
    const time = $(this).attr("data-time");
    const description = $(`textarea[data-time="${time}"]`).val();
    localStorage.setItem(time, description);
  });
  
  // Load saved timeblock descriptions
  businessHours.forEach(hour => {
    const description = localStorage.getItem(hour);
    $(`textarea[data-time="${hour}"]`).val(description);
  });
  