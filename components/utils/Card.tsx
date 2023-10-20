type Item = {
  name: string;
  imgPath: string;
  description?: string;
};
type CardProp = {
  item: Item;
};
const Card = ({ item }: CardProp) => (
  <div>
    <div
      className="w-full aspect-square bg-cover flex opacity-90 p-5 rounded-3xl"
      style={{
        backgroundImage: `url(${item.imgPath})`,
      }}
    >
      <h2 className="mt-auto left-align text-white font-black text-5xl font-exo text-shadow">
        {item.name}
      </h2>
    </div>
    {item.description && (
      <p className="text-justify font-medium font-exo">{item.description}</p>
    )}
  </div>
);

export default Card;
