// Get all rows in the table body
const rows = document.querySelectorAll('table tbody tr');
// Loop through the rows and assign alternating classes
rows.forEach((row, index) => {
    if (index % 2 === 0) {
        row.classList.add('row-even'); // Even rows
    } else {
        row.classList.add('row-odd'); // Odd rows
    }
});

function swapAndToggle(element1, element2) {
    let temp = element1.textContent;
    element1.textContent = element2.textContent;
    element2.textContent = temp;

    element1.classList.toggle("group-a");
    element1.classList.toggle("group-b");
    element2.classList.toggle("group-a");
    element2.classList.toggle("group-b");
}

const today = new Date(); // Get today's date dynamically

function getWeekOfYear(date) {
    const startDate = new Date(date.getFullYear(), 0, 1); // January 1st
    const diff = date - startDate; // Difference in milliseconds
    const oneWeek = 1000 * 60 * 60 * 24 * 7; // milliseconds in one week
    return Math.ceil(diff / oneWeek) + 1; // Week number (add 1 to start from week 1)
}

function switchgroup() {
    console.log("Switching groups...");

    // Target the specific spans using their IDs and swap content
    const a1 = document.getElementById('A1');
    const a2 = document.getElementById('A2');
    swapAndToggle(a1, a2);
    const b1 = document.getElementById('B1');
    const b2 = document.getElementById('B2');
    const c1 = document.getElementById('C1');
    const c2 = document.getElementById('C2');
    swapAndToggle(b1, c1);
    swapAndToggle(b2, c2);
    const z1 = document.getElementById('Z1');
    const z2 = document.getElementById('Z2');
    const z3 = document.getElementById('Z3');
    const z4 = document.getElementById('Z4');
    const z5 = document.getElementById('Z5');
    const z6 = document.getElementById('Z6');
    const z7 = document.getElementById('Z7');
    const z8 = document.getElementById('Z8');
    swapAndToggle(z1, z2);
    swapAndToggle(z3, z4);
    swapAndToggle(z5, z6);
    swapAndToggle(z7, z8);
    const d2 = document.getElementById("D2");
    const d3 = document.getElementById("D3");
    swapAndToggle(d2, d3);
}

// Get the current week number (dynamically)
const weekNumber = getWeekOfYear(today);
console.log("Current week number: " + weekNumber); // Debugging the week number

// Trigger the group switch based on the current week
if (weekNumber % 2 !== 0) {
    console.log("It's an even week. No action needed.");
} else {
    console.log("It's an odd week! Triggering switchgroup.");
    switchgroup();
}

// Digital clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Display group message based on the week
function displayGroupMessage() {
    const message = document.getElementById("groupMessage");
    if (weekNumber % 2 !== 0) {
        message.textContent = "Group B is first this week!";
    } else {
        message.textContent = "Group A is first this week!";
    }
}

// Call the functions on load
document.addEventListener("DOMContentLoaded", function() {
    updateClock(); // Set the clock initially
    displayGroupMessage(); // Set the group message
    setInterval(updateClock, 1000); // Update the clock every second
});
