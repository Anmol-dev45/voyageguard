type Item = {
  _id: string;
  name: string;
  description: string;
  images: string[];
};

type Category = {
  tag: string;
};
type Hotel = {
  stars: number;
} & Item;

type Destination = {
  isTopTen: boolean;
  price: number;
  hotels: Hotel[];
  tags: Category[];
} & Item;
