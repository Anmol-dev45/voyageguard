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
    <section className="my-12">
      <Container>
        <h2 className="heading">Our key Feature</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
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
