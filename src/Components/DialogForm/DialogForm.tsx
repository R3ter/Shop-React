import "./style.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineXMark } from "react-icons/hi2";
import { GrCheckmark } from "react-icons/gr";
import ArrowButton from "../ArrowButton/ArrowButton";
import DialogInput from "./DialogInput/DialogInput";
import { useRef } from "react";
interface IProps {
  title: string;
  describe?: string;
  imageLink: string;
  price: string;
  id: string | undefined;
  onAgree?({}: any): void;
  onRefuse?(): void;
}
export default ({
  title,
  describe,
  imageLink,
  id,
  price,
  onAgree = () => {},
  onRefuse = () => {},
}: IProps) => {
  const titleText = useRef<HTMLInputElement>();
  const descText = useRef<HTMLTextAreaElement>();
  const imageText = useRef<HTMLInputElement>();
  const priceText = useRef<HTMLInputElement>();
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
            refs={{ titleText, descText, imageText, priceText }}
            imageLink={imageLink}
            price={price}
            id={id}
            description={describe}
            title={title}
          />
          <div className="buttons">
            <ArrowButton
              type="Secondary"
              icon={<GrCheckmark size={25} />}
              title="submit"
              onclick={() =>
                onAgree({ titleText, descText, imageText, priceText })
              }
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
