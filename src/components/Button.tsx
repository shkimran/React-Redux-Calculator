import { useDispatch } from 'react-redux';
import { handleButton } from '../features/calculatorSlice';
import React from 'react';

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();

  const isOp = ['÷', '×', '−', '+', '='].includes(value);
  const isUtil = ['AC', '+/-', '%'].includes(value);
  const isZero = value === '0';

  return (
    <button
      className={`
        ${isZero ? 'col-span-2 text-left pl-6' : ''}
        ${isOp ? 'bg-orange-500 text-white shadow-[inset_0px_3px_3px_#ffffff]' : ''}
        ${isUtil ? 'bg-gray-400 text-black shadow-[inset_0px_4px_4px_#ffffff]' : ''}
        ${!isOp && !isUtil ? 'bg-neutral-700 text-white shadow-[inset_0px_3px_2px_#ffffff91]' : ''}
        text-xl py-4 rounded-full hover:brightness-125 transition-all
      `}
      onClick={() => dispatch(handleButton(value))}
    >
      {value}
    </button>
  );
});

export default Button;
