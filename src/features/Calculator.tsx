import Display from "../components/Display";
import Keyboard from "../components/Keyboard";

 const Calculator = () => {
  return (
    <div className="w-[320px] bg-neutral-900 rounded-2xl p-4 shadow-lg">
      <Display />
      <Keyboard />
    </div>
  );
};

export default Calculator;