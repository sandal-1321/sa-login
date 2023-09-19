import './App.css';
import Com1 from './component/compo1'
import Com2 from './component/compo2'
import Com3 from './component/compo3'
import { Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Com1 />} />
        <Route path="/createuser" element={<Com2 />} />
        <Route path="/viewuser" element={<Com3 />} />
      </Routes>
    </div>
  );
}

export default App;
