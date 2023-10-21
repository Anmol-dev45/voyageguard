import Container from "./utils/Container";
import Button from "./utils/Button";
import Image from "next/image";
import Link from "next/link";
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const backgroundImageUrl = "/Background.png";

  return (
    <section className="relative md:pb-60 min-h-[70vh]">
      <div className="absolute w-full h-full top-0 left-0 opacity-95 bg-fixed -z-50">
        <Image
          src={backgroundImageUrl}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Container>
        <div className="flex flex-col gap-8 items-center justify-center mb-12 pt-32">
          <h1 className="text-white font-black font-exo text-4xl sm:text-5xl xl:text-7xl mt-56 text-center leading-[1.3em]">
            Explore Nepal with <br />
            VoyageGuard
          </h1>

          <Link
            href="/destinations"
            className="inline-block"
            aria-label="Start your journey"
          >
            <Button variant="default">Start your journey</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
