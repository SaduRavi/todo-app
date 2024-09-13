import React from 'react';

export default function ErrorPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorTitle}>404 - Page Not Found</h1>
      <p style={styles.errorMessage}>Sorry, the page you are looking for does not exist.</p>
      <button style={styles.homeButton} onClick={() => window.location.href = '/'}>
        Go to Homepage
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  errorTitle: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  errorMessage: {
    fontSize: '18px',
    marginBottom: '32px',
  },
  homeButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
