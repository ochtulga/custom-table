import React from 'react';

export function Checkbox(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id + props.text}
        name={props.text}
        onClick={() => props.onClick(props.id)}
      />
      <label for={props.id + props.text}> {props.text}</label>
    </>
  );
}
