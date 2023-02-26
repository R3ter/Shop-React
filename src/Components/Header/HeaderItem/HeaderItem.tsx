import { Link } from "react-router-dom";
import "./style.scss";
interface IProps {
  item: string | JSX.Element;
  link?: string;
}
export default ({ item, link = "#" }: IProps) => {
  return (
    <Link to={link}>
      <div className="HeaderItem">{item}</div>
    </Link>
  );
};
