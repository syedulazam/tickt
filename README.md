# Tickt.co

Tickt.co is a curated list of events all over the world that have been postponed or cancelled due to the COVID-19 crisis. This website allows users to search for events and contribute to the WHO COVID-19 Solidarity Response Fund.

## Features

- **Event List**: View a list of cancelled or postponed shows, concerts, and festivals.
- **Search**: Search for events by name.
- **Form Submission**: Submit events that are not listed.
- **Donation Information**: Information on how to donate part of your refunded ticket money to the WHO COVID-19 Solidarity Response Fund.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **SQLite**: A lightweight, disk-based database.
- **React**: A JavaScript library for building user interfaces.
- **CSS**: Styling using CSS modules.

## Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/syedulazam/tickt.git
    cd tickt
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Set up SQLite database**:

    Ensure SQLite is installed on your machine. If not, download and install it from the official website: [SQLite Download](https://www.sqlite.org/download.html).

    Initialize the database:

    ```sh
    sqlite3 database.db
    ```

    Create the events table:

    ```sql
    CREATE TABLE events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        location TEXT,
        date TEXT,
        donations INTEGER,
        status TEXT
    );
    ```

4. **Run the development server**:

    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

```plaintext
tickt
├── pages
│   ├── api
│   │   └── events.js       # API route to fetch events data
│   └── index.js            # Main page component
├── public
│   └── tickt1.png          # Logo image
├── styles
│   └── Home.module.css     # CSS module for styling
├── .gitignore
├── package.json
├── README.md
└── database.db             # SQLite database file
API
The API route to fetch events data is located at pages/api/events.js. It uses SQLite to query the database and return a list of events.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

vbnet
Copy code

### Explanation of the Code

1. **pages/index.js**: This is the main page component of the application. It includes:
    - Fetching data from the `/api/events` API.
    - Handling search input to filter events.
    - Displaying a list of events in a table.
    - Including a form for users to submit new events.

2. **pages/api/events.js**: This file contains the API route to fetch events from the SQLite database. It connects to the database, queries the events, and returns the data as JSON.

3. **public/tickt1.png**: The logo image used in the header section of the main page.

4. **styles/Home.module.css**: CSS module for styling the main page. It includes styles for various components such as the header, event list, search input, and form section.

5. **database.db**: The SQLite database file that stores event data.

### Additional Notes

- Ensure that SQLite is correctly installed and the database is properly set up before running the application.
- Customize the README file further to include any additional details specific to your project.

By following these instructions and using the provided template, you should be able to create a comprehensive README file for your GitHub repository. If you need any further assistance, feel free to ask!
