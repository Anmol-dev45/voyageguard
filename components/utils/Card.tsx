import Image from "next/image";
import Link from "next/link";

type Item = {
  name: string;
  imgPath: string;
  description?: string;
};
type CardProp = {
  item: Item;
};
const Card = ({ item }: CardProp) => (
  <Link key={item.name} href={"/services/"} className="relative">
    <Image
      src={item.imgPath}
      width={500}
      height={500}
      className="rounded-[3rem] w-full aspect-square object-cover  opacity-90"
      alt={item.name}
      loading="lazy"
    />
    <h2 className="card-text">
      {item.name}
    </h2>
    {item.description && (
      <p className="body-text line-clamp-3">{item.description}</p>
    )}
  </Link>
);

export default Card;
