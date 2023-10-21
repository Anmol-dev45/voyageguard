import Image from "next/image";
import Link from "next/link";

interface Item {
  _id: string;
  name: string;
  image: string;
  description?: string;
}

interface CardProps {
  item: Item;
}

const DHCard: React.FC<CardProps> = ({ item }) => {
  return (
    <Link
      key={item._id}
      href={"/destinations/" + item._id}
      className="relative"
    >
      <Image
        src={item.image}
        width={500}
        height={500}
        className="rounded-[3rem] w-full aspect-square object-cover  opacity-90"
        alt={item.name}
        loading="lazy"
      />
      <h2 className="left-align text-white font-black text-5xl font-exo text-shadow absolute z-40 bottom-4 left-6">
        {item.name}
      </h2>
      <p className="body-text line-clamp-3">
        {item.description}
      </p>
    </Link>
  );
};

DHCard.defaultProps = {
  item: {
    _id: "",
    name: "",
    image: "",
    description: "",
  },
};

export default DHCard;
