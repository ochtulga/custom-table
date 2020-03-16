import React from 'react';

import { getData } from './server/getData';
import { CustomTable } from './Component/customTable/CustomTable';
import { Button } from './Component/button/button';

function App() {
  const onClickAction = id => {
    console.log('id from action', id);
  };
  
  const preparedData = {
    action: [
      {
        text: 'View',
        onClick: onClickAction,
        element: <Button />
      }
    ],
    data: getData()
  };

  return (
    <div>
      hello custom table
      <CustomTable table={preparedData} />
    </div>
  );
}

export default App;
