import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(props) {
  const path = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);
  

  return;
}

export default ScrollToTop;
