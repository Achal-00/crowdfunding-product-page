import { useEffect, useState } from "react";

const width = screen.width;

export default function Navbar() {
  if (width <= 1024) {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      if (menu) {
        document.querySelector(".menu-overlay").style.display = "grid";
        document.querySelector(".menu-holder img").src = "icon-close-menu.svg";
        document.querySelector(".blur-overlay").style.display = "block";
      } else {
        document.querySelector(".menu-overlay").style.display = "none";
        document.querySelector(".menu-holder img").src = "icon-hamburger.svg";
        document.querySelector(".blur-overlay").style.display = "none";
      }
    }, [menu]);

    return (
      <nav className="mobile-nav">
        <div className="logo-holder">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="menu-holder">
          <img
            src="icon-hamburger.svg"
            alt="menu"
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
        <div className="menu-overlay">
          <p>About</p>
          <p>Discover</p>
          <p>Get Started</p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="desktop-nav">
        <div className="logo-holder">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="links">
          <p>About</p>
          <p>Discover</p>
          <p>Get Started</p>
        </div>
      </nav>
    );
  }
}
