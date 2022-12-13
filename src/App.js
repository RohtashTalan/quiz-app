import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./components/Homepage";
import QuizApp from "./components/QuizPage"; 
import QuizResult from "./components/ResultPage";
import Questions from "./components/data/question.json"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path='/quiz' element={<QuizApp/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
