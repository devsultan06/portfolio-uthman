import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/projects" element={<Projects />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
