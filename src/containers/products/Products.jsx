import React from 'react';

import { getData } from '../../server/getData';
import { CustomTable } from '../../components/customTable/CustomTable';
import { Checkbox } from '../../components/checkbox/Checkbox';

import { Types } from '../../constants/enums/containerTypes';

export function Products(props) {
  const onClickAction = id => {
    console.log('id from action on Product', id);
  };

  const datas = getData(Types.products) || [];
  if (datas.length < 1) {
    return <div>Empty</div>;
  }

  const rows = Object.keys(datas[0]);
  rows.push('ActionForData');

  const preparedData = {
    actions: [
      {
        text: 'Check Me',
        onClick: onClickAction,
        element: <Checkbox />
      }
    ],
    rows: rows,
    datas: datas,
    actionData: 'ActionForData'
  };

  return (
    <div>
      <div>Promotion CustomTable</div>
      <CustomTable table={preparedData} />
    </div>
  );
}
