import ShoeCard from "../ShoeCard/ShoeCard";
import "./style.scss";

type props = {
  shoes: {
    image: string;
    name: string;
    id: string;
    price: number;
  }[];
};
export default ({ shoes }: props) => {
  return (
    <div className="ShoeCards">
      {shoes &&
        shoes?.map((e, index) => {
          return <ShoeCard {...e} key={index} />;
        })}
    </div>
  );
};
