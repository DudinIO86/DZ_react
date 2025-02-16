import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import About from "./components/AboutPage";
import Home from './components/HomePage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
