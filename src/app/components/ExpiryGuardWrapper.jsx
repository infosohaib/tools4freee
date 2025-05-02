'use client';

import { useEffect, useState } from 'react';

export default function ExpiryGuardWrapper({ children }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const now = new Date();

    const pakistanOffset = 5 * 60; 
    const localUtcOffset = now.getTimezoneOffset(); 
    const totalOffset = (pakistanOffset + localUtcOffset) * 60 * 1000; 

    const pakistanTime = new Date(now.getTime() + totalOffset);

    const expiryDate = new Date('2025-04-30T12:21:00');

    console.log('Pakistan Time Now:', pakistanTime.toString());
    console.log('Expiry Time:', expiryDate.toString());

    if (pakistanTime > expiryDate) {
      setExpired(true);
    }
  }, []);

  if (expired) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        flexDirection: 'column',
        background: '#fff',
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something Went Wrong!</h1>
        <p>Please contact the developer to solve this issue.</p>
        <p>Email: <a href="mailto:you@sohaibniazi191@gmail.com">sohaibniazi191@gmail.com</a></p>
      </div>
    );
  }

  return children;
}
