// pages/index.js
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    // Fetch data from your API or database
    const fetchData = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <img src="/tickt1.png" alt="Ticket logo" className={styles.logo} />
        <h1 className={styles.mainTitle}>Tickt.co</h1>
        <p className={styles.description}>
          Many shows, concerts and festivals all around the globe have been
          postponed or cancelled due to coronavirus. Most of the tickets are
          being refunded. This is a great opportunity to do something good about
          it: donate part of that money to the{" "}
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">
            WHO Covid-19 Solidarity Response Fund
          </a>{" "}
          in honor of your favourite artists and bands.
        </p>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            💡 <strong>Tickt.co</strong> is a curated list of events all over
            the world that have been postponed or cancelled due to the COVID-19
            crisis. If you know of an event that has been cancelled or whose
            date has moved to 2021 due to coronavirus, please let us know using
            the form below. We will update the list of events as soon as
            possible.
          </p>
        </div>
      </header>

      {/* Existing Event List Section */}
      <h1 className={styles.title}>Cancelled/Postponed Shows</h1>
      <input
        type="text"
        placeholder="Search for events..."
        className={styles.searchInput}
        value={filterText}
        onChange={handleFilterChange}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Artist / Band / Festival</th>
            <th>Where</th>
            <th>When</th>
            <th># Donations</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.where}</td>
              <td>{event.when}</td>
              <td>{event.donations}</td>
              <td>
                <span
                  className={
                    event.status === "Postponed"
                      ? styles.postponedStatus
                      : styles.cancelledStatus
                  }
                >
                  {event.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* New Form Section */}
      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Is your event not listed?</h2>
        <p className={styles.formDescription}>
          Let us know with the form below!
        </p>
        <iframe
          src="https://glopezdetorre.typeform.com/to/LIvOhf"
          width="100%"
          height="500"
          className={styles.typeform}
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media;"
        ></iframe>
      </section>

      {/* New Footer Section */}
      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          💡 Please consider sharing this page with your friends and colleagues
          to contribute to COVID-19 Solidarity Response Fund.
        </p>
        <p className={styles.footerText}>
          Tickt.co is a non-profit project made with love for people and music.
          This project is not affiliated to WHO or any other organisation.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
