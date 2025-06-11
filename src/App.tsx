import { ToastContainer } from "react-toastify";
import Calculator from "./features/Calculator";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-400">
        <Calculator />
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App;
