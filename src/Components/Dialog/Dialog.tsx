import "./style.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineXMark } from "react-icons/hi2";
import { GrCheckmark } from "react-icons/gr";
import ArrowButton from "../ArrowButton/ArrowButton";
interface IProps {
  title: string;
  describe?: string;
  type: "warning2Buttons" | "warning1Buttons" | "danger" | "info";
  onAgree?(): void;
  onRefuse?(): void;
}
export default ({
  title,
  describe,
  type = "warning2Buttons",
  onAgree = () => {},
  onRefuse = () => {},
}: IProps) => {
  let color = "red";
  if (type == "danger") {
    color = "red";
  } else if (type == "info") {
    color = "blue";
  } else {
    color = "#ffbd00";
  }
  return (
    <div className="Dialog">
      <div className="box">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RiErrorWarningLine style={{ margin: 20 }} color={color} size={60} />
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{describe}</h4>
          <div className="buttons">
            <ArrowButton
              type="Secondary"
              icon={<GrCheckmark size={25} />}
              title="proceed"
              onclick={() => onAgree()}
            />
            <ArrowButton
              type="Secondary"
              icon={<HiOutlineXMark size={25} />}
              title="undo"
              onclick={() => onRefuse()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
