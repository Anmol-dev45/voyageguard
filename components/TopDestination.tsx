import { getTopDestinations } from "@/sanity/lib/client";
import DHCard from "./utils/DHCard";
import Button from "./utils/Button";
import Container from "./utils/Container";
import Link from "next/link";
const TopDestination = async () => {
  const destinations = await getTopDestinations();
  console.log(destinations);
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col items-center gap-12">
          <div className="w-full">
            <h2 className="heading">Top Destination</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
            {destinations.map((destination: any) => (
              <DHCard item={destination} key={destination._id} />
            ))}
          </div>
          <Link href="/destinations">
            <Button variant="with-icon">See more</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TopDestination;
