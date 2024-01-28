"use client"; // This is a client component 👈🏽
import "./styles/navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const toggleButton = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-bar ${isNavOpen ? "open" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="main-logo">
        <h1>NextApp</h1>
      </div>
      <p>page router:{pathname}</p>
      <ul className="ul-topnav">
        <li>
          <Link className={`home ${pathname == "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`about ${pathname == "/about" ? "active" : ""}`}
            href="/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className={`contact ${pathname == "/contact" ? "active" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={`news ${pathname == "/news" ? "active" : ""}`}
            href="/news"
          >
            News
          </Link>
        </li>
      </ul>
      <button className={`button-icon`} type="button" onClick={toggleButton}>
        {isNavOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}
