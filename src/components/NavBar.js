import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const [activeLink, setActivelink] = useState("home");
  const [scroll, setScroll] = useState(false);

  const onUpdateActiveLink = (activeLink) => {
    setActivelink(activeLink);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="md" className={scroll ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sai-harsha-34153b198/">
                <img src={navIcon1} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
