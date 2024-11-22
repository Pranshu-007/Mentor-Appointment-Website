<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mentor Booking Website</title>
</head>
<body>

  <h1>Mentor Booking Website</h1>

  <p>Welcome to the Mentor Booking Website! This platform allows users to browse a list of mentors across various skill sets, view their details, check availability, and book appointments for topic discussions.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Home Page:</strong> Displays a list of mentors with their names, skills, and ratings.</li>
    <li><strong>Mentor Detail Page:</strong> Provides detailed information about a mentor, including a brief bio, skills, and rating.</li>
    <li><strong>Available Dates & Time Slots:</strong> View a calendar of available dates for each mentor and select a time slot for your session.</li>
    <li><strong>Booking Form:</strong> Fill in your name, email, and discussion topic to confirm your booking.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React, React Router, MUI (Material UI), Dayjs</li>
    <li><strong>Backend:</strong> (Currently not implemented, can be extended with a backend)</li>
    <li><strong>Styling:</strong> Custom CSS, MUI theme</li>
  </ul>

  <h2>Project Setup</h2>

  <h3>Prerequisites</h3>
  <p>Ensure you have the following installed:</p>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://npmjs.com/">npm</a> (Comes with Node.js)</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yourusername/mentor-booking-website.git</code></pre>
    </li>
    <li>Navigate into the project directory:
      <pre><code>cd mentor-booking-website</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
  </ol>

  <h3>Running the Application</h3>
  <ol>
    <li>Start the development server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>
  <p>This will run the application on <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>Folder Structure</h2>
  <pre><code>
/mentor-booking-website
│
├── /src
│   ├── /components        # Contains reusable components (e.g., Calendar, MentorCard)
│   ├── /pages            # Contains main pages (e.g., MentorList, MentorDetail)
│   ├── /assets           # Contains images, icons, and other assets
│   ├── /styles           # Custom styles for the application
│   └── App.js            # Main component that ties everything together
│
├── /public
│   └── index.html        # Main HTML file
│
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
  </code></pre>

  <h2>Available Pages</h2>
  <ol>
    <li><strong>Home Page</strong> (`/`): Displays a list of mentors, their skills, ratings, and a "View Details" button.</li>
    <li><strong>Mentor Detail Page</strong> (`/mentor/:name`): Displays detailed information about the selected mentor, including:
      <ul>
        <li>Bio</li>
        <li>Skills</li>
        <li>Rating</li>
        <li>Calendar for available dates</li>
        <li>Available time slots for each date</li>
      </ul>
    </li>
    <li><strong>Booking Form</strong>: After selecting a time slot, users can fill in their name, email, and discussion topic, and submit the booking.</li>
  </ol>

  <h2>Features in Detail</h2>

  <h3>Mentor List Page</h3>
  <ul>
    <li>Displays mentors in a grid, with the ability to filter mentors by their skill sets.</li>
    <li>Clicking on a mentor redirects to the mentor's detail page.</li>
  </ul>

  <h3>Mentor Detail Page</h3>
  <ul>
    <li>View mentor’s bio, skills, rating, and available time slots.</li>
    <li>The calendar shows available dates in a light green color. After selecting a date, available time slots are displayed.</li>
    <li>Time slots are provided for the user to choose, and once selected, a booking form is shown.</li>
  </ul>

  <h3>Booking Form</h3>
  <ul>
    <li>Fill in your details (name, email, and discussion topic).</li>
    <li>Submit the form to confirm the booking.</li>
    <li>On successful submission, a confirmation message is shown, and the form is reset.</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
