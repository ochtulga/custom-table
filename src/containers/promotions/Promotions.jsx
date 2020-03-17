import React from 'react';

import { getData } from '../../server/getData';
import { CustomTable } from '../../components/customTable/CustomTable';
import { Button } from '../../components/button/Button';

import { Types } from '../../constants/enums/containerTypes';

export function Promotions(props) {
  const onViewClickAction = id => {
    console.log('id from view action on Promotion', id);
  };

  const onEditClickAction = id => {
    console.log('id from edit action on Promotion', id);
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
        text: 'View',
        onClick: onViewClickAction,
        element: <Button />
      },
      {
        text: 'Edit',
        onClick: onEditClickAction,
        element: <Button />
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
