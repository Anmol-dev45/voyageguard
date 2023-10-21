import { FEATURE } from "@/constant";
import React from "react";
import Card from "./utils/Card";
import Container from "./utils/Container";
import Button from "./utils/Button";

const KeyFeature = () => {
  const keyFeature = FEATURE.filter((feature) => feature.keyFeature).map(
    (feature) => ({
      name: feature.name,
      imgPath: feature.imgPath,
      description: feature.description,
    })
  );

  return (
    <section className="page-wrapper">
      <Container>
        <h2 className="heading">Our key Feature</h2>
        <div className="card-wrapper">
          {keyFeature &&
            keyFeature.map((feature) => (
              <Card item={feature} key={feature.name} />
            ))}
        </div>
       
      </Container>
    </section>
  );
};

export default KeyFeature;
