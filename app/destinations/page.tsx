import Container from "@/components/utils/Container";
import { getDestinations } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function Destination() {
  const destinations = await getDestinations();

  return (
    <section className="py-8 md:py-32 px-4">
      <Container>
        <h1 className="text-4xl md:text-6xl font-semibold mb-3">
          Top Destination In Nepal
        </h1>
        <p className="description text-lg text-black/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          minus dicta saepe?
        </p>
        <div className="mt-20">
          {destinations.map((destination: any) => (
            <section
              className="flex flex-col xl:flex-row gap-x-20 gap-y-10 items-start px-4 py-2 xl:px-16 xl:py-14 shadow-2xl shadow-black mb-14 rounded-lg xl:rounded-3xl"
              key={destination._id}
            >
              <Image
                src={destination.images[0]}
                alt={destination.name}
                width={500}
                height={500}
                className="flex-none rounded-2xl aspect-square object-cover shadow-xl shadow-gray-600 max-w-[400px] w-full"
              />
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 hover:underline">
                  {destination.name}
                </h2>
                <p className="description mb-3 text-justify text-black/70">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  reiciendis praesentium dignissimos accusamus harum aperiam ea
                  laborum sint. Eligendi nobis quam a porro! Deleniti nisi
                  tempora iusto quos provident maxime voluptatum nesciunt
                  debitis eveniet fugiat. Provident ipsa corrupti esse rerum
                  nemo voluptatem. Dicta, totam adipisci quae inventore quaerat
                  eaque nihil eum optio voluptatum doloremque, accusantium quos
                  voluptas tempora in maiores. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. In reiciendis praesentium
                  dignissimos accusamus harum aperiam ea laborum sint. Eligendi
                  nobis quam a porro! Deleniti nisi tempora iusto quos provident
                  maxime voluptatum nesciunt debitis eveniet fugiat. Provident
                  ipsa corrupti esse rerum nemo voluptatem. Dicta, totam
                  adipisci quae inventore quaerat eaque nihil eum optio
                  voluptatum doloremque, accusantium quos voluptas tempora in
                  maiores.
                </p>
                <div className="flex justify-between mb-6">
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="underline text-primary"
                  >
                    Learn More
                  </Link>
                  <Link href={`/guide`} className="underline text-primary">
                    How can we get there?
                  </Link>
                  <Link
                    href={`/precautions/`}
                    className="underline text-primary"
                  >
                    Precautions
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
