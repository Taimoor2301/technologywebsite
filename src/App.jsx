import Navbar from "./Pages/Home/Section1/Navbar";
import MobileNav from "./Pages/Home/Section1/MobileNav";
import Home from "./Pages/Home/Section1/Home";
import Section2 from "./Pages/Home/Section2/Section2";
import Section3 from "./Pages/Home/Section3/Section3";
import Section4 from "./Pages/Home/Section4/Section4";
import Section5 from "./Pages/Home/Section5/Section5";
import { useEffect, useState } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add eventlistener to changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:1150px)");

    //set the initial value of isMobile state
    setIsMobile(mediaQuery.matches);

    //define a callback function to handel changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    //add a callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {!isMobile ? <Navbar /> : <MobileNav />}
      <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}

export default App;
