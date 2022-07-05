import React from "react";

//Components
import Navbar from "./components/navbar/navbar";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Footer from "./components/footer/footer";

//Animation Component
import Animation from "./components/anime/anime";

function App() {
  return (
    <main>
      <Animation />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
}

export default App;
