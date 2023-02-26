import ArrowButton from "../ArrowButton/ArrowButton";
import "./style.scss";

interface IProps {
  Description: string;
  name: string;
  image: string;
  createdAt: string;
  price: number;
}
export default ({ Description, name, image, createdAt, price }: IProps) => {
  return (
    <div className="ProductInfo">
      <div>
        <div>
          <h1>{name}</h1>
          <h3>{Description}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <ArrowButton title="Buy now" />
          </div>
          <h2>${price}</h2>
        </div>
      </div>
    </div>
  );
};
