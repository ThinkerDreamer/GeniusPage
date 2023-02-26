import React from 'react';
import Image from 'next/image';

function GPLogo({ size = 150 }) {
  return (
    <Image
      src="/logo-dark.svg"
      width={size}
      height={size}
      priority
      alt="GeniusPage Logo"
    ></Image>
  );
}

export default GPLogo;
