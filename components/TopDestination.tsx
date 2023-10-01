import { getTopDestinations } from "@/sanity/lib/client";
import DHCard from "./utils/DHCard";
const TopDestination = async () => {
  const destinations = await getTopDestinations();
  console.log(destinations);
  return (
    <div className="flex items-center gap-9 justify-start flex-wrap">
      {destinations.map((destination: any) => (
        <DHCard item={destination} key={destination._id} />
      ))}
    </div>
  );
};

export default TopDestination;
