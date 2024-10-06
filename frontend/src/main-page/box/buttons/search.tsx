import * as React from 'react';
import Button from '@mui/material/Button';
import TestClient from '../../../response/test.js';


export default function SearchButton() {
  return (
    <Button 
      onClick={(e: any) => {
        TestClient.sendGet().then((res: { data: any }) => {
          alert(res.data);
      })
      }}
      variant = "outlined" 
      sx = {{ 
        background: 'rgba(250, 149, 44, 0.5)',
        borderRadius: 1,
        marginTop: 1,
        minWidth: 170, 
        minHeight: 56, 
        color: 'white',
        textTransform: 'capitalize',
        borderColor: 'rgba(250, 149, 44, 0)',

        '&:hover': {
          background: 'rgba(250, 149, 44, 0.3)',
          borderColor: 'rgba(250, 149, 44, 0)',
        },
      }}
    >
      Search
    </Button>
  );
}