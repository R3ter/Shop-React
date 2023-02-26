import { Link } from "react-router-dom";
import ArrowButton from "../ArrowButton/ArrowButton";
import "./style.scss";
interface IProps {
  name: string;
  id: string;
  price: number;
  image: string;
}
export default ({ name, id, price, image }: IProps) => {
  return (
    <div className="ShoeCard">
      <Link to={"/ShoePage/" + id}>
        <div className="Image" style={{ backgroundImage: `url(${image})` }}>
          {" "}
        </div>
        <h2>{name}</h2>
        <h4>{price} $</h4>
      </Link>
    </div>
  );
};
