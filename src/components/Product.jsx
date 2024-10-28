import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json(); // Corrected here
    setProducts(data); // You might want to set the fetched data to state
    console.log(data);
  };

  useEffect(() => {
    fetchProducts(); // Call the fetch function on component mount
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {products.map((product) => {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Link>{product.price}</Link> */}
                <Link to={`/products/${product.id}`} variant="primary" className="btn btn-primary">
                {product.price}
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
