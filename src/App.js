import { Reset } from "styled-reset" 
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Survey from "./pages/Survey";
import Loading from "./pages/Loading";
import Result from "./pages/Result";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
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

function App() {
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/survey" element={<Survey/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
