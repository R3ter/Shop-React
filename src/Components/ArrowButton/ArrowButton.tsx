import "./style.scss";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
interface IProps {
  title: string;
  type?: "Primary" | "Secondary";
  style?: React.CSSProperties;
  link?: string;
  icon?: React.ReactNode;
  onclick?(): void;
}
export default ({
  title,
  type = "Primary",
  style,
  link = "",
  onclick = () => {},

  icon,
}: IProps) => {
  return (
    <Link to={link || "#"}>
      <div
        onClick={() => {
          onclick();
        }}
        className={"ArrowButton" + type}
        style={{ ...style }}
      >
        <p>{title}</p>
        {!icon ? <HiArrowSmRight size={30} /> : icon}
      </div>
    </Link>
  );
};
