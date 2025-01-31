import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;

    document.querySelector(".mobile-nav")?.classList.toggle("active");
    document.querySelector(".blur-overlay")?.classList.toggle("active");

    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        !target.closest("button")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function toggleMenu() {
    setOpen((open) => !open);
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/">
          <img
            className="brand"
            src="/logo.png"
            alt=""
            width={60}
            height={60}
          />
        </a>
        <div className="nav-list">
          <ol className="nav-links">
            <li>
              <a href="#about">01. About</a>
            </li>
            <li>
              <a href="#work">02. Work</a>
            </li>
            <li>
              <a href="#projects">03. Projects</a>
            </li>
            <li>
              <a href="#contact">04. Contact</a>
            </li>
          </ol>
          <div>
            <button className="btn btn--ghost resume-btn">Resume</button>
            <button onClick={toggleMenu} className="btn btn--ic menu-btn">
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>
      <nav ref={navRef} className="mobile-nav">
        <div>
          <button onClick={toggleMenu} className="btn btn--ic close-menu-btn">
            <XIcon />
          </button>
        </div>
        <div className="mobile-nav-list">
          <a href="#about">01. About</a>
          <a href="#work">02. Work</a>
          <a href="#projects">03. Projects</a>
          <a href="#contact">04. Contact</a>
          <button className="btn btn--ghost">Resume</button>
        </div>
      </nav>
      <div className="blur-overlay" />
    </header>
  );
}

export default Header;
