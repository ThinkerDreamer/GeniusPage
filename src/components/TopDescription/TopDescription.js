import React from 'react';
import styles from '../../styles/TopDescription.module.css';

function TopDescription() {
  return (
    <div className={styles.description}>
      <p style={{ fontWeight: 600 }}>
        GeniusPage is an AI-powered landing page builder that helps
        users quickly and easily create beautiful and effective
        landing pages for their websites.
      </p>
      <p style={{ fontWeight: 600 }}>
        By leveraging the power of artificial intelligence and machine
        learning, GeniusPage provides a user-friendly interface that
        allows users to customize their pages with ease.
      </p>
    </div>
  );
}

export default TopDescription;
