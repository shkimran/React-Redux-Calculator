import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';

const Display = () => {
  const display = useSelector((state: RootState) => state.calculator.display);
  return (
    <div className="text-white text-4xl text-right px-4 py-6 min-h-[80px] break-all">
      {display}
    </div>
  );
};

export default Display;
