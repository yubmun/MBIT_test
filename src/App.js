import reset from "styled-reset" 
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Survey from "./pages/Survey";
import Result from "./pages/Result";
import {createGlobalStyle} from "styled-components";
import {useState, createContext} from "react"
import data from "./data/data.json"
import resultData from "./data/result.json"

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    background-color: #F7F1C0;
  }
  a {
    text-decoration: none;
  }
`

export const commonData = createContext();

function App() {

  const [question, setQuestion] = useState(data);
  console.log(question);
  const [answer, setAnswer] = useState(resultData);
  console.log(answer);


  return (
    <>
      <GlobalStyle />
      <commonData.Provider value={{question, answer}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </commonData.Provider>
    </>
  );
}
export default App;
