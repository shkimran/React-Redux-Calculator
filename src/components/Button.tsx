import { useDispatch } from 'react-redux';
import { handleButton } from '../features/calculatorSlice';

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  const dispatch = useDispatch();

  const isOp = ['÷', '×', '−', '+', '='].includes(value);
  const isUtil = ['AC', '+/-', '%'].includes(value);
  const isZero = value === '0';

  return (
    <button
      className={`
        ${isZero ? 'col-span-2 text-left pl-6' : ''}
        ${isOp ? 'bg-orange-500 text-white' : ''}
        ${isUtil ? 'bg-gray-300 text-black' : ''}
        ${!isOp && !isUtil ? 'bg-neutral-700 text-white' : ''}
        text-xl font-medium py-4 rounded-full hover:brightness-110 transition-all
      `}
      onClick={() => dispatch(handleButton(value))}
    >
      {value}
    </button>
  );
};

export default Button;
