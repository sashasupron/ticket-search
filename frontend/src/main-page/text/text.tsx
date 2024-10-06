import React from 'react';
import { Typography } from '@mui/material'; // Импортируем Typography из Material-UI

function Description() {
  return (
    <div className="description-container">
      <Typography
        style={{
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'Roboto',
          fontWeight: '100',
          fontSize: '40px',
          textAlign: 'left',
          // marginLeft: '80px',
          // marginTop: '-100px',
          marginBottom : '40px',
        }}
      >
        Explore your adventures! Book flights now!
      </Typography>

      {/* <Typography
        style={{
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'Roboto',
          fontWeight: '100',
          fontSize: '30px',
          textAlign: 'center',
          // marginLeft: '80px',
          marginBottom : '20px',
        }}
      >
        Book flights now!
      </Typography> */}
    </div>
  );
}

export default Description;