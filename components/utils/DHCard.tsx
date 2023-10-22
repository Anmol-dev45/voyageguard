import Image from "next/image";
import Link from "next/link";



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
        src={item.images[0]}
        width={500}
        height={500}
        className="rounded-[3rem] w-full aspect-square object-cover  opacity-90"
        alt={item.name}
        loading="lazy"
      />
      <h2 className="card-text">
        {item.name}
      </h2>
      <p className="body-text line-clamp-3">
        {item.description}
      </p>
    </Link>
  );
};

export default DHCard;
