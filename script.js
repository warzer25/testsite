function swapAndToggle(element1, element2) {
    let temp = element1.textContent;
    element1.textContent = element2.textContent;
    element2.textContent = temp;

    element1.classList.toggle("group-a");
    element1.classList.toggle("group-b");
    element2.classList.toggle("group-a");
    element2.classList.toggle("group-b");
}
function switchSunday() {
    alert("No classes to switch on Sunday.");
}

function switchMonday() {
    // Target the specific spans using their IDs
    const a1 = document.getElementById('A1');
    const a2 = document.getElementById('A2');
    swapAndToggle(a1, a2);
}

function switchTuesday() {
    // Target the specific spans using their IDs
    const b1 = document.getElementById('B1');
    const b2 = document.getElementById('B2');
    const c1 = document.getElementById('C1');
    const c2 = document.getElementById('C2');
    swapAndToggle(b1, c1);
    swapAndToggle(b2, c2);
}

function switchWednesday() {
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
}

function switchThursday() {
    // Target practical classes on Thursday by IDs
    const d2 = document.getElementById("D2");
    const d3 = document.getElementById("D3");
    swapAndToggle(d2, d3);
}

function saveSchedule() {
    alert("Schedule saved!");
}




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


const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});