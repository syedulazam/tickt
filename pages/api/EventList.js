import React from "react";
import styles from "../styles/Home.module.css";
import EventRow from "./EventRow";

const EventList = ({ events }) => (
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
      {events.map((event) => (
        <EventRow key={event.id} event={event} />
      ))}
    </tbody>
  </table>
);

export default EventList;
