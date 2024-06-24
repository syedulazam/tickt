import React from "react";
import styles from "../styles/Home.module.css";

const Header = () => (
  <header className={styles.header}>
    <img src="/tickt1.png" alt="Ticket logo" className={styles.logo} />
    <h1 className={styles.mainTitle}>Tickt.co</h1>
    <p className={styles.description}>
      Many shows, concerts and festivals all around the globe have been
      postponed or cancelled due to coronavirus. Most of the tickets are being
      refunded. This is a great opportunity to do something good about it:
      donate part of that money to the{" "}
      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">
        WHO Covid-19 Solidarity Response Fund
      </a>{" "}
      in honor of your favourite artists and bands.
    </p>
    <div className={styles.infoBox}>
      <p className={styles.infoText}>
        💡 <strong>Tickt.co</strong> is a curated list of events all over the
        world that have been postponed or cancelled due to the COVID-19 crisis.
        If you know of an event that has been cancelled or whose date has moved
        to 2021 due to coronavirus, please let us know using the form below. We
        will update the list of events as soon as possible.
      </p>
    </div>
  </header>
);

export default Header;
