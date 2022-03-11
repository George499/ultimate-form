import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { FirstStep } from "./FirstStep";
import { ThirdStep } from "./ThirdStep";
import SecondStep from "./SecondStep";
import { Result } from "./Result";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FirstStep />} />
          <Route path="/step2" element={<SecondStep />} />
          <Route path="/step3" element={<ThirdStep />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
