import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "#66FCF1", fontSize: "1.5rem" }}>
            <FontAwesomeIcon icon={faFilm} />
            FilmFiends
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", fontSize: "1rem" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/">
                Movies
              </NavLink>
              <NavLink className="nav-link" to="/watchList">
                Watch List
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="ml-auto Header-buttons">
        <Button variant="outline-info" className="me-2">
          Login
        </Button>
        <Button variant="outline-info" className="me-2">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
