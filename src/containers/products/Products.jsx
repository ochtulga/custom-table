import React from 'react';

import { getData } from '../../server/getData';
import { CustomTable } from '../../components/customTable/CustomTable';
import { Checkbox } from '../../components/checkbox/Checkbox';

import { Types } from '../../constants/enums/containerTypes';

export function Products(props) {

  const onClickAction = id => {
    console.log('id from action on Product', id);
  };
  
  const preparedData = {
    action: [
      {
        text: 'Ckeck Me',
        onClick: onClickAction,
        element: <Checkbox />
      }
    ],
    data: getData(Types.products)
  };

  return (
    <div>
      <div>Promotion CustomTable</div>
      <CustomTable table={preparedData} />
    </div>
  );
}
