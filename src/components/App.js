import "./App.css";
import Header from "./Header";
import Layot from "./Layot";
import Footer from "./Footer";
import Logo from './../assets/bg3.jpg'

function App() {
  const title = "This is title";
  const descr = "This is Description!";
  return (
    <>
      <Header title={ title } descr={ descr } />
      <Layot  title={ title } descr={ descr } urlBg={Logo} colorBg='red' />
      <Layot  title={ title } descr={ descr } colorBg='red' />
      <Layot  title={ title } descr={ descr } urlBg={Logo} colorBg='red' />
      <Footer />
    </>
  );
}

export default App;