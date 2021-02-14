import * as React from 'react';
import { Button } from 'react-native-paper';

export default function ButtonExample({value}) {
  return (
    <Button raised mode="contained" style={{height: 50, justifyContent:'center'}}>
      {value}
    </Button>
  );
}