import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import EventList from "../components/EventList";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";

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
      <Header />
      <h1 className={styles.title}>Cancelled/Postponed Shows</h1>
      <input
        type="text"
        placeholder="Search for events..."
        className={styles.searchInput}
        value={filterText}
        onChange={handleFilterChange}
      />
      <EventList events={filteredEvents} />
      <FormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
