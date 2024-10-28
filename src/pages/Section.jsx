import React from "react";
import "./Section.css";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { products } from "../components/Data2";
const Section = () => {
  const params = useParams();
  let a = params.category;
  console.log(a);
  console.log(products[a]);
  return (
    <div className="section">
      <div className="section-bar">
        <h3>{a}</h3>
        <div className="live"></div>
      </div>
      <div className="cards">
        {products[a].map((e) => {
          return (
            <Card
              ptitle={e.title}
              pimg={e.image}
              prprice={e.real_price}
              pdprice={e.discounted_price}
              pdesc={e.description}
              pid={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
