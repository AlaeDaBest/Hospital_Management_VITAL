import React from 'react';
function Logo() {
  const styles = {
    container: {
      display: 'flex',
      position:'fixed',
      width: '100%',
      zIndex: '100',
      alignItems: 'center',
      fontSize: '38px',
      fontWeight: 'bold',
      color: '#22CBC2',
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#FBF7F7',
      borderRadius: '5px',
      borderBottom: '4px solid rgba(145, 248, 243, 0.35)',
    },
    image: {
      width: '50px', 
      height: '50px',
      marginRight: '10px', 
    },
    text: {
      fontSize: '38px',
      fontWeight: 'bold',
      color: '#22CBC2',
    },
  };
  return (
    <div style={styles.container}>
      <img src="Images/Home/Logo.png" alt="Logo" style={styles.image} />
      <div style={styles.text}>VITAL</div>
    </div>
  );
}
export default Logo;
