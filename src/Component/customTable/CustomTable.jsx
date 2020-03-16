import React from 'react';

export function CustomTable(props) {
  if (!props.table) {
    return <div> Empty </div>;
  }

  const action = props.table.action[0];

  return (
    <div>
      {props.table.data.map(row => (
        <div key={row.id}>
          {row.name} |{' '}
          {React.cloneElement(action.element, {
            text: action.text,
            id: row.id,
            onClick: action.onClick
          })}
        </div>
      ))}
    </div>
  );
}
