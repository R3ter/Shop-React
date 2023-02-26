import ArrowButton from "../ArrowButton/ArrowButton";
import MainTitle from "./MainTitle/MainTitle";
import "./style.scss";
export default () => {
  return (
    <div>
      <div className="MainSection">
        <div className="background">
          <div className="layer">
            <MainTitle title="25% OFF HOLIDAY SALE" />
            <ArrowButton title="Shop now" link="/shoes" />
          </div>
        </div>
      </div>
    </div>
  );
};
