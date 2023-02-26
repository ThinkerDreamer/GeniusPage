import React from 'react';
import styles from '@/styles/RainbowContainer.module.css';

function RainbowContainer({ children }) {
  return (
    <div className={styles.rainbowContainer}>
      <div className={styles.transparencyOverRainbow}>
        {children}
        {/* End transparency-over-rainbow */}
      </div>
    </div>
  );
}

export default RainbowContainer;
