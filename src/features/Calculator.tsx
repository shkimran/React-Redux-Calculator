import { useEffect } from 'react';
import Display from '../components/Display';
import Keyboard from '../components/Keyboard';
import { useDispatch } from 'react-redux';
import { handleButton } from '../features/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const keyMap: Record<string, string> = {
      '+': '+',
      '-': '−',
      '*': '×',
      '/': '÷',
      '%': '%',
      Enter: '=',
      '=': '=',
      Escape: 'AC',
      Backspace: 'AC',
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      if (/^[0-9.]$/.test(key)) {
        dispatch(handleButton(key));
      } else if (keyMap[key]) {
        dispatch(handleButton(keyMap[key]));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <div className="w-[320px] bg-neutral-900 rounded-2xl p-4 shadow-lg">
      <Display />
      <Keyboard />
    </div>
  );
};

export default Calculator;
