//alert("Hello"); //test

//event listener for user btn clicks
var navButton = document.querySelector(".dropbtn");
var navContent = document.querySelector(".dropdown-content");


function toggleDropdown() {
  // Toggle the visibility of the drop-down content
  if (navContent.style.display === "none") {
    navContent.style.display = "block";
  } else {
    navContent.style.display = "none";
  }
}

// Attach click event listener to the button
navButton.addEventListener("click", toggleDropdown);

// Attach mouseover event listener to the button
navButton.addEventListener("mouseover", toggleDropdown);

