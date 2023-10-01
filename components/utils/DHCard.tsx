import Image from "next/image";

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
        <div key={item._id} className="relative">
            <Image
                src={item.image}
                width={380}
                height={380}
                objectFit="cover"
                className="rounded-xl"
                alt={item.name}
                loading="lazy"
            />
            <h2 className="left-align text-white font-black text-5xl font-exo text-shadow absolute z-40 bottom-4 left-6">
                {item.name}
            </h2>

            <p className="text-justify font-medium font-exo line-clamp-3">
                {item.description}
            </p>
        </div>
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
