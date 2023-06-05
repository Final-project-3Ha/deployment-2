import { useDispatch, useSelector } from "react-redux";
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
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";
import { useEffect, useState } from "react";
import { getCategories } from "../../redux/actions/categoryActions";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const { categories } = useSelector((state) => state.getCategories);
  const [searchCategoryToggle, setSearchCategoryToggle] = useState("All");
const [searchQuery, setSearchQuery] = useState();

  const primaryColor = "#f3f5fa";
  // const secondaryColor = "#458217";
  const accentColor = "#E48334";
  const accentButtonStyle = {
    backgroundColor: accentColor,
  };
  const navbarStyle = {
    backgroundColor: primaryColor,
  };

 const navigate = useNavigate();


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
   if (searchQuery && searchQuery.trim()) {
     if (searchCategoryToggle === "All") {
       navigate(`/product-list/search/${searchQuery}`);
     } else {
       navigate(
         `/product-list/category/${searchCategoryToggle.replaceAll(
           "/",
           ","
         )}/search/${searchQuery}`
       );
     }
   } else if (searchCategoryToggle !== "All") {
     navigate(
       `/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}`
     );
   } else {
     navigate("/product-list");
   }
  }


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
              src="/Monueh-Hssn.svg"
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
                title={searchCategoryToggle}
                style={accentButtonStyle}
              >
                {Array.isArray(categories) &&
                  categories.map((category, id) => (
                    <Dropdown.Item
                      key={id}
                      onClick={() => setSearchCategoryToggle(category.name)}
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
              <Form.Control
                onKeyUp={submitHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search in shop ..."
              />

              <Button onClick={submitHandler} style={accentButtonStyle}>
                <i className="bi bi-search text-white"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav className="ms-auto">
            {userInfo && userInfo.isAdmin ? (
              <LinkContainer to="/admin/orders">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            ) : userInfo && userInfo.name && !userInfo.isAdmin ? (
              <NavDropdown
                title={`${userInfo.name} ${userInfo.lastName}`}
                id="collasible-nav-dropdown"
              >
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

                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                {/* <LinkContainer to="/product-list">
                  <Nav.Link>Products</Nav.Link>
                </LinkContainer> */}
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
            <LinkContainer to="/cart">
              <Nav.Link style={accentButtonStyle}>
                <Badge pill bg="#E48334" style={accentButtonStyle}>
                  {itemsCount === 0 ? "" : itemsCount}
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
