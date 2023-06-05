import React from "react";
import { Form } from "react-bootstrap";
function AttributesFilterComponent() {
  return (
    <>
      {[
        { Cheese: ["Of cow's milk", "Of goat's milk"] },
        { Labneh: ["Of cow's milk", "Of goat's milk"] },
      ].map((item, idx) => (
        <div key={idx} className="mb-3">
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((i, idx) => (
            <Form.Check key={idx} type="checkbox" label={i} />
          ))}
        </div>
      ))}
    </>
  );
}

export default AttributesFilterComponent;
