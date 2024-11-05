/* Import a Google Font */ 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Body and header styles */
body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #c1e3ff67 0%,  #495b6a 100%); /* Softer, slightly darker gradient */
    margin: 0;
    padding: 20px;
    box-sizing: border-box; /* Ensure padding doesn’t affect layout */
}

h1 {
    text-align: center;
    color: #2c3e50; /* Darker gray-blue */
    margin-bottom: 20px; /* Space below the title */
    font-weight: 700; /* Bolder title */
    font-size: 36px; /* Slightly smaller font size */
    letter-spacing: 1px; /* Slight letter-spacing for the title */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15); /* More subtle shadow for depth */
}

/* Table styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15); /* Deeper shadow for the table */
    border-radius: 12px; /* Rounded corners */
    background-color: #ffffff; /* White background for table */
    overflow-x: auto; /* Ensure table is scrollable on small screens */
    transition: transform 0.3s ease-in-out; /* Smooth transition for hover effect */
}

table:hover {
    transform: translateY(-7px); /* Slightly lift the table on hover */
}

/* Table cells */
th, td {
    padding: 12px; /* Reduced padding for a more compact look */
    text-align: center;
    border: 1px solid #ddd; /* Light border */
    font-size: 14px; /* Smaller font size */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth background transition */
}

/* Header styling */
th {
    background-color: #2980b9; /* Slightly darker blue */
    color: white;
    text-transform: uppercase; /* Uppercase for headers */
    font-weight: bold;
    font-size: 14px; /* Smaller font size for header */
    letter-spacing: 1px; /* Spaced-out letters for header */
}

th:hover {
    background-color: #1f6f8b; /* Even darker blue on hover */
    transform: scale(1.03); /* Slight zoom effect on hover */
    animation: wobble 0.3s ease forwards; /* Wobble effect on hover */
}

/* Row styles for alternating colors */
.row-odd {
    background-color: #f2f2f2; /* Lighter gray for odd rows */
}

.row-even {
    background-color: #ffffff; /* White for even rows */
}

/* Row hover effect */
tbody tr:hover {
    background-color: #d5e6f2; /* Light blue on hover */
    transform: scale(1.03); /* Slight scale on hover */
    transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transition */
}

/* Table row entrance animation */
tbody tr {
    opacity: 0;
    transform: translateX(-20px); /* Slide in from the left */
    animation: fadeInSlide 0.5s ease forwards;
}

@keyframes fadeInSlide {
    0% {
        opacity: 0;
        transform: translateX(-20px); /* Start off-screen */
    }
    100% {
        opacity: 1;
        transform: translateX(0); /* End in normal position */
    }
}

/* Card-like style for classes */
strong {
    display: block;
    font-size: 14px; /* Smaller font for class names */
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 3px 18px rgba(0, 0, 0, 0.1); /* Larger shadow for the class card */
    background-color: #f7f7f7; /* Light gray background for class cards */
    margin-bottom: 1px; /* Space between class cards */
    transition: background-color 0.2s ease, transform 0.3s ease;
}

strong:hover {
    background-color: #e1f5fe; /* Light blue background on hover */
    transform: scale(1.05); /* Zoom-in effect */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Larger shadow */
}

/* Styles for theoretical and practical classes */
.theoretical {
    color: #2980b9; /* Darker blue for theoretical classes */
    font-weight: bold;
}

.practical {
    color: #e74c3c; /* Darker red for practical classes */
    font-weight: bold;
}

/* Styles for group letters */
.group-a {
    color: #8e44ad; /* Darker purple for Group A */
    font-weight: bold;
}

.group-b {
    color: #27ae60; /* Darker green for Group B */
    font-weight: bold;
}

/* Button styles */
button {
    background-color: #2980b9; /* Darker blue button */
    color: white;
    padding: 10px 20px; /* Smaller padding for the button */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    margin: 15px auto; /* Adjusted margin */
    font-size: 16px; /* Smaller font for buttons */
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s, border-color 0.3s;
}

button:hover {
    background-color: #1f6f8b; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly scale on hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
    animation: pulse 0.5s ease-out infinite; /* Pulse effect */
}

button:active {
    background-color: #1b5988; /* Even darker blue when clicked */
    transform: scale(0.98); 
    animation: none; /* Remove pulse when clicked */
}

button:focus {
    outline: 3px solid #2980b9;
    outline-offset: 4px;
    box-shadow: 0 0 10px rgba(41, 128, 185, 0.7); /* Glow effect on focus */
    transform: scale(1.03); /* Slightly enlarge the button */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease; /* Smooth transition */
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1); /* Expand slightly */
    }
    100% {
        transform: scale(1);
    }
}

/* No classes style */
td.no-classes {
    color: #c0392b; /* Dark red text color */
    font-style: italic;
    padding: 12px 18px;
    border-radius: 5px; /* Rounded corners for no-classes cell */
    font-weight: bold;
    transition: transform 0.2s ease-in-out; /* Smooth effect for the no-class cell */
}

td.no-classes:hover {
    transform: translateY(-3px); /* Slight lift when hovered */
}

/* Teacher and location styles */
.teacher {
    font-size: 14px;
    color: #7f8c8d; /* Darker gray for text */
}

.location {
    font-size: 16px; /* Slightly smaller font for locations */
    color: #2c3e50; /* Darker color for better contrast */
    font-weight: 500; /* Slightly bolder text */
    transition: color 0.3s ease, transform 0.3s ease;
}

.location:hover {
    color: #2980b9; /* Change color on hover */
    transform: translateY(-3px); /* Hover effect for location */
}

/* Custom scrollbar */
table::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
}

table::-webkit-scrollbar-thumb {
    background-color: #2980b9; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded edges for scrollbar thumb */
}

table::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the scrollbar track */
}

table::-webkit-scrollbar-thumb:hover {
    background-color: #1f6f8b; /* Darker thumb on hover */
}

/* Responsive Design */
@media (max-width: 600px) {
    table {
        margin: 10px 0;
        box-shadow: none; /* Remove shadow on mobile */
    }

    th, td {
        padding: 10px; /* Slightly smaller padding */
        font-size: 12px; /* Smaller font size */
    }

    button {
        font-size: 14px; /* Smaller button font size */
        padding: 8px 18px;
    }

    h1 {
        font-size: 28px; /* Smaller title on mobile */
    }
}
