import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { FirstStep } from "./FirstStep";
import SecondStep from "./SecondStep";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FirstStep />} />
          <Route path="/step2" element={<SecondStep />} />
          <Route path="/step3" element={<>Step 3</>} />
          <Route path="/result" element={<>Result</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
