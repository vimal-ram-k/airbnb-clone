import Footernavigation from "./components/footernavigation";
import Navigationbar from "./components/navigationbar";
import Landing from "./pages/landing";
import { useEffect, useState } from "react";

function App() {
  const [scrollup, setScrollup] = useState(true);
  const [pagePositon, setPageposition] = useState(0);

  const footer_nav = () => {
    const footer_navigationbar = document.getElementById("footer_navigation");
    console.log(pagePositon);
    if (!scrollup) {
      footer_navigationbar?.classList.remove("position-fixed");
    } else {
      footer_navigationbar?.classList.add("position-fixed");
    }
  };

  useEffect(() => {
    const handle = () => {
      const currentPosition = window.scrollY;
      console.log(currentPosition);
      setScrollup(currentPosition < pagePositon);
      setPageposition(currentPosition);
    };

    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [pagePositon, scrollup]);

  useEffect(() => {
    footer_nav();
  }, [scrollup]);

  return (
    <div className="" style={{ paddingTop: "80px" }}>
      <Navigationbar />
      <Landing />
      <Footernavigation />
    </div>
  );
}

export default App;
