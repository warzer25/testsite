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

// Helper function to get the week number for a specific date
function getWeekOfYear(date) {
    const startDate = new Date(date.getFullYear(), 0, 1); // January 1st
    const diff = date - startDate; // Difference in milliseconds
    const oneWeek = 1000 * 60 * 60 * 24 * 7; // milliseconds in one week
    return Math.ceil(diff / oneWeek); // Week number
}

// Function to get the upcoming Sunday's date
function getNextSunday(date) {
    const nextSunday = new Date(date);
    const dayOfWeek = date.getDay();
    const daysUntilSunday = (7 - dayOfWeek) % 7; // Calculate days until Sunday
    nextSunday.setDate(date.getDate() + daysUntilSunday);
    return nextSunday;
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

// Helper function to fetch time from an online source
async function fetchServerTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        if (!response.ok) throw new Error('Failed to fetch time');
        const data = await response.json();
        return new Date(data.datetime); // Convert server time to Date object
    } catch (error) {
        console.error("Error fetching server time:", error);
        return new Date(); // Fallback to client time in case of an error
    }
}

// Digital clock
function updateClock(date) {
    const clock = document.getElementById("clock");

    // Get hours, minutes, and seconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Get full date (weekday, month, day, year)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week
    const month = months[date.getMonth()]; // Get the month
    const dayOfMonth = date.getDate(); // Get the day of the month
    const year = date.getFullYear(); // Get the year

    // Update the clock element with both time and full date
    clock.textContent = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year} ${hours}:${minutes}:${seconds}`;
}

// Function to update the group message
function displayGroupMessage(nextSundayWeekNumber) {
    const message = document.getElementById("groupMessage");
    if (nextSundayWeekNumber % 2 !== 0) {
        message.textContent = "Group B is first this week!";
    } else {
        message.textContent = "Group A is first this week!";
    }
}

// Global flag to track the last switched week
let lastSwitchedWeek = null; // Keeps track of the last switched week

// Main function to initialize the app
async function initializeApp() {
    const serverTime = await fetchServerTime(); // Fetch server time
    const today = serverTime.getDay(); // Get the current day (0 = Sunday, 1 = Monday, etc.)
    const nextSunday = today === 4 ? serverTime : getNextSunday(serverTime); // If today is Sunday, use today's date
    const nextSundayWeekNumber = getWeekOfYear(nextSunday); // Week number for next Sunday
    
    console.log("Next Sunday's week number:", nextSundayWeekNumber); // Debugging the week number
    console.log("Today is:", today === 0 ? "Sunday" : "Not Sunday"); // Debug current day

    // Display the group message
    displayGroupMessage(nextSundayWeekNumber);

    // Ensure the group switch happens only once per week
    if (nextSundayWeekNumber !== lastSwitchedWeek && nextSundayWeekNumber % 2 !== 0) {
        console.log("Next Sunday is an odd week. Triggering switchgroup.");
        switchgroup();
        lastSwitchedWeek = nextSundayWeekNumber; // Update the flag
    } else if (nextSundayWeekNumber === lastSwitchedWeek) {
        console.log("Group switch already happened for this week. Skipping.");
    } else {
        console.log("Next Sunday is an even week. No action needed.");
    }

    // Start the clock
    setInterval(() => {
        const now = new Date();
        updateClock(now);
        // Check for Sunday every second and trigger the switch if necessary
        if (now.getDay() === 0 && getWeekOfYear(now) !== lastSwitchedWeek) {
            console.log("Today is Sunday. Triggering switchgroup.");
            switchgroup();
            lastSwitchedWeek = getWeekOfYear(now); // Update the flag
        }
    }, 1000); // Update the clock every second
}

// Trigger the initialization when the document is ready
document.addEventListener("DOMContentLoaded", initializeApp);
