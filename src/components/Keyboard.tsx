import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
];

const Keyboard = React.memo(() => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.flat().map((btn, idx) => (
        <Button key={idx} value={btn} />
      ))}
    </div>
  );
});

export default Keyboard;
