import React from "react";
import { useDispatch } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userAction.js";
function AdminLinksComponent() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT_USER" });
  //   navigate("/");
  // };
  return (
    <Navbar bg="light" variant="light">
      <Nav defaultActiveKey="/home" className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/chats">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>

        {/* <Nav.Link onClick={handleLogout}>Logout</Nav.Link> */}

        <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AdminLinksComponent;
