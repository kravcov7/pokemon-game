import "./App.css";
import Header from "./Header/Index";
import Layot from "./Layot/Index";
import Footer from "./Footer/Index";
import Logo from './../assets/bg3.jpg'

function App() {
  const title = "This is title";
  const descr = "This is Description!";
  return (
    <>
      <Header title={ title } descr={ descr }  />
      <Layot  title={ title } descr={ descr } urlBg={Logo} colorBg='#181d23' />
      <Layot  title={ title } descr={ descr } colorBg='#181d23' />
      <Layot  title={ title } descr={ descr }  urlBg={Logo} colorBg='#181d23' />
      <Footer />
    </>
  );
}

export default App;