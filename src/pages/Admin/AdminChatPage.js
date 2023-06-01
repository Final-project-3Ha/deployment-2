import React from "react";
import AdminChatRoomComponent from "../../components/Admin/AdminChatRoomComponent.js";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent";
import { Row, Col } from "react-bootstrap";

function AdminChatPage() {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <AdminChatRoomComponent />
      </Col>
    </Row>
  );
}

export default AdminChatPage;
