import Card from "@/components/utils/Card";
import Container from "@/components/utils/Container";
import { FEATURE } from "@/constant";

export default async function Destination() {
  const feature = FEATURE;
  return (
    <section className="px-4 md:py:32 py-8">
      <Container>
        <h1 className="text-4xl md:text-6xl font-semibold mb-3">
          Top Destination In Nepal
        </h1>
        <p className="description text-lg mb-20 text-black/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          minus dicta saepe?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-24">
          {feature &&
            feature.map((feature) => (
              <Card item={feature} key={feature.name} />
            ))}
        </div>
      </Container>
    </section>
  );
}
