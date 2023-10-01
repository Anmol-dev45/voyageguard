import Hero from "@/components/Hero";
import KeyFeature from "@/components/KeyFeature";
import TopDestination from "@/components/TopDestination";
import Container from "@/components/utils/Container";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <KeyFeature />
      <Container>
        <TopDestination />
      </Container>
    </>
  );
};

export default page;
