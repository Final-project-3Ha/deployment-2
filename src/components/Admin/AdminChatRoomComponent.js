import React, { useState, Fragment } from "react";
import { Toast, Form, Button } from "react-bootstrap";

function AdminChatRoomComponent() {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false)

  return (
    <>
      <Toast className="ms-4 mb-5" show={toast1} onClose={close1}>
        <Toast.Header style={{ backgroundColor: "#f7892d" }}>
          <h5 className="me-auto" style={{ color: "#ffffff" }}>
            Chat with Hssn
          </h5>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p
                  id="user-chat"
                  className="bg-primary p-3 ms-4 text-light rounded-pill"
                >
                  <b>User wrote:</b> Hello world! This is a chat message.
                </p>
                <p id="admin-chat">
                  <b>Admin wrote:</b> Hello world! This is a chat message.
                </p>
              </Fragment>
            ))}
          </div>

          <Form.Group className="mt-3">
            <Form.Label>Write a message</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>

          <Button className="btn btn-success btn-block mt-2" type="submit">
            Submit
          </Button>
        </Toast.Body>
      </Toast>
    </>
  );
}

export default AdminChatRoomComponent;
