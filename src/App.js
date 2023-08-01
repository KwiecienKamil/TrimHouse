import { useState } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Modal from "./UI/Modal";

function App() {
  const [openAbout, setOpenAbout] = useState(false);

  const openAboutHandler = () => {
    setOpenAbout(!openAbout);
  };
  const closeAboutHandler = () => {
    setOpenAbout(false);
  };

  return (
    <>
      <Navbar />
      <Header onOpenAbout={openAboutHandler} />
      {openAbout && <Modal onCloseAbout={closeAboutHandler} />}
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
