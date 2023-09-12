import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Titulo from "./components/Titulo";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Titulo/>
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
    </>
  );
}

export default App;
