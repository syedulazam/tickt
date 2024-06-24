import React from "react";
import styles from "../styles/Home.module.css";

const EventRow = ({ event }) => (
  <tr>
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
);

export default EventRow;
