import React, { useEffect, useState } from "react";
import './BottonTop.css'

const BottonTop = () => {
  const [showBotton, setShowButton] = useState(false);

  const ReturnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showBotton ? (
        <a className="to-top" onClick={ReturnTop}>
          <img
            src="https://img.icons8.com/?size=300&id=p4GKpK6kR11d&format=png&color=000000"
            alt=""
          />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottonTop;
