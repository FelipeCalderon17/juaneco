import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Titulo from "./components/Titulo";
import  { useState } from 'react';
import AppEn from "./AppEn";
function App() {
  const [lenguaje, setLenguaje] = useState("ES");
  return (
    <>
    {lenguaje=="ES" ? (<>
      <Navbar lenguaje={lenguaje} setLenguaje={setLenguaje}/>
      <Header />
      <Titulo/>
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
    </>):(<>
      <AppEn/>
    </>)}
    </>
  );
}

export default App;
