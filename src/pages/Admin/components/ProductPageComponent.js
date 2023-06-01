import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/Admin/AdminLinksComponent.js";
import "../AdminProductsPage.css";
import { useState, useEffect } from "react";
import { logout } from "../../../redux/actions/userAction.js";


function ProductPageComponent({ fetchProducts, deleteProduct }) {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message === "Product Delete successfully") {
        setProductDeleted(!productDeleted);
      }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch(
        (er) => 
        setProducts([
          {name:er && er.response && er.response.data.message
            ? er.response.data.message
            : er && er.response && er.response.data}
        ])
      );
    return () => abctrl.abort();
  }, [fetchProducts, productDeleted]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />{" "}
      </Col>
      <Col md={10}>
        <h1 className="mb-4">
          {" "}
          Product List
          <Link to="/admin/create-new-product">
            <Button className="ms-2">Create new</Button>
          </Link>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category} </td>
                <td>
                  <Link to={`/admin/edit-product/${item._id}`}>
                    <Button className="btn-sm" id="btn-edit">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </Link>
                  {" / "}
                  <Button className="btn-sm" onClick={() => deleteHandler (item._id)}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default ProductPageComponent;
