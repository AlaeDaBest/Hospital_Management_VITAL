import React from 'react';

function Logo() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '38px',
      fontWeight: 'bold',
      color: '#22CBC2',
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#D9D9D9',
      borderRadius: '5px',
    },
    image: {
      width: '50px', // Adjust size as needed
      height: '50px',
      marginRight: '10px', // Space between the image and text
    },
    text: {
      fontSize: '38px',
      fontWeight: 'bold',
      color: '#22CBC2',
    },
  };

  return (
    <div style={styles.container}>
      <img src="" alt="Logo" style={styles.image} />
      <div style={styles.text}>VITAL</div>
    </div>
  );
}
export default Logo;
