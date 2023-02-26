import ArrowButton from "../../ArrowButton/ArrowButton";
import "./style.scss";
type props = {
  title: string;
};

export default ({ title }: props) => {
  return (
    <div className="MainTitle">
      <h2>{title}</h2>
    </div>
  );
};
