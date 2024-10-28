import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdesc = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const fetchProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json(); // Added await here
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [params.id]); // Added params.id as a dependency

  return (
    <>
      {product.title ? <h1>{product.title}</h1> : <p>Loading...</p>}
      {/* Handle loading state */}
    </>
  );
};

export default Productdesc;
