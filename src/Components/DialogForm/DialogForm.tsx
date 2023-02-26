import "./style.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineXMark } from "react-icons/hi2";
import { GrCheckmark } from "react-icons/gr";
import ArrowButton from "../ArrowButton/ArrowButton";
import DialogInput from "./DialogInput/DialogInput";
import { useEffect, useRef } from "react";
interface IProps {
  title: string;
  describe: string;
  imageLink: string;
  price: string;
  id: string | undefined;
  onAgree?({}: any): void;
  onRefuse?(): void;
}
export default ({
  title,
  describe = "",
  imageLink,
  id,
  price,
  onAgree = () => {},
  onRefuse = () => {},
}: IProps) => {
  const a = useRef<any>();
  return (
    <div className="Dialog">
      <div className="box">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <RiErrorWarningLine style={{ margin: 20 }} color={"blue"} size={60} />
        </div>
        <div>
          <h3>{"Edit"}</h3>
          <DialogInput
            imageLink={imageLink}
            price={price}
            id={id}
            description={describe}
            title={title}
            onLoad={(arg1, arg2, arg3, arg4) => {
              a.current = { arg1, arg2, arg3, arg4 };
            }}
          />
          <div className="buttons">
            <ArrowButton
              type="Secondary"
              icon={<GrCheckmark size={25} />}
              title="submit"
              onclick={() => {
                onAgree(a.current);
              }}
            />
            <ArrowButton
              type="Secondary"
              icon={<HiOutlineXMark size={25} />}
              title="Cancel"
              onclick={() => onRefuse()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
