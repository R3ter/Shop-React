import { GrFormAdd } from "react-icons/gr";
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
            <ArrowButton
              icon={<GrFormAdd size={30} />}
              title="Add Item"
              link="/addItem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
