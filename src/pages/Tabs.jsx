import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";
import { products } from "../components/Data";
const Tabs = () => {
  return (
    <>
      <div className="tabs">
        {products.map((cat) => {
          return (
            <Link className="tab" to={`/${cat}`}>
              {cat}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
