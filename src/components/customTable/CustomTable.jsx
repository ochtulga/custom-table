import React from 'react';

import { TableCell } from './TableCell';

export function CustomTable(props) {
  if (!props.table) {
    return <div> Empty </div>;
  }

  const actions = props.table.actions;

  const renderHeader = row => {
    return (
      <div>
        {row.map((cell, id) => (
          <TableCell key={id + cell} value={cell} />
        ))}
      </div>
    );
  };

  const renderCell = (cell, rowId, row) => {
    if (cell === props.table.actionData) {
      const newAction = actions.map(action =>
        React.cloneElement(action.element, {
          text: action.text,
          id: rowId,
          onClick: action.onClick,
          key: rowId + action.text
        })
      );

      return newAction;
    }

    return row[cell];
  };

  const renderRows = row => {
    return (
      <div key={row.id}>
        {props.table.rows.map(cell => (
          <TableCell
            key={row.id + cell}
            value={renderCell(cell, row.id, row)}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderHeader(props.table.rows)}
      {props.table.datas.map(row => renderRows(row))}
    </div>
  );
}
