import React , { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const primaryColor = "#f3f5fa";
  // const secondaryColor = "#458217";
  const navigate = useNavigate();
  const accentColor = "#E48334";
  const accentButtonStyle = {
    backgroundColor: accentColor,
  };
  const navbarStyle = {
    backgroundColor: primaryColor,
  };
  const handelLogoutButton = () => {
    dispatch({ type: "LOGOUT_USER" });
    navigate("/login");
  };
  const [isAdmin , setIsAdmin] = useState(false);
useEffect(() => {
// console.log(JSON.parse(localStorage.getItem("userInfo")));
} , [])
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={navbarStyle}>
      <Container>
        {/* <img
          src="/images/Carousel/Monuehh.svg"
          alt="Monueh Logo"
          height="100"
          width="100"
        /> */}

        {/* <i className="bi bi-cart-dash"></i> */}
        <LinkContainer to="/">
          <Navbar.Brand href="/">
            {" "}
            <img
              src="/images/Carousel/Monueh-Hssn.svg"
              alt="Monueh Logo"
              height="100"
              width="100"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ padding: "5px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                title="All"
                style={accentButtonStyle}
              >
                <Dropdown.Item>Olive oil</Dropdown.Item>
                <Dropdown.Item>Zaatar</Dropdown.Item>
                <Dropdown.Item>Honey</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop ..." />
              <Button style={accentButtonStyle}>
                <i className="bi bi-search text-white"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav className="ms-auto">
           {isAdmin &&<LinkContainer to="/admin/orders">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer> } 

            <NavDropdown title="Hassan HA" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handelLogoutButton}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/product-list">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link style={accentButtonStyle}>
                <Badge pill bg="#E48334" style={accentButtonStyle}>
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
