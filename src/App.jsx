import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Services from "./components/services";
import About from "./components/About";
import Product from "./components/product";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Myfooter from "./components/MyFooter"

function App() {
  return(
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Blogs/>
    <Newsletter/>
    <Myfooter/>
    </>
  );
}

export default App;