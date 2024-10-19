import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import SingleDog from "./Pages/SingleDog/SingleDog";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/:name" element={<SingleDog/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
