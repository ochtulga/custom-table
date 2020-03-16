import React from 'react';

import { getData } from '../../server/getData';
import { CustomTable } from '../../components/customTable/CustomTable';
import { Button } from '../../components/button/Button';

import { Types } from '../../constants/enums/containerTypes';

export function Promotions(props) {

  const onViewClickAction = id => {
    console.log('id from action on Promotion', id);
  };
  
  const preparedData = {
    action: [
      {
        text: 'View',
        onClick: onViewClickAction,
        element: <Button />
      }
    ],
    data: getData(Types.promotions)
  };

  return (
    <div>
      <div>Promotion CustomTable</div>
      <CustomTable table={preparedData} />
    </div>
  );
}
