import "./App.css";
import Header from "./Header/Index";
import Layot from "./Layot/Index";
import Footer from "./Footer/Index";

function App() {
  const title = "This is title";
  const descr = "This is Description!";
  return (
    <>
      <Header title={ title } descr={ descr }  />
      <Layot  title={ title } descr={ descr }  />
      <Layot  title={ title } descr={ descr }  />
      <Layot  title={ title } descr={ descr }  />
      <Footer />
    </>
  );
}

export default App;
