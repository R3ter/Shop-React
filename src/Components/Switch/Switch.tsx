import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./style.scss";

interface IProps {
  isOn: boolean;
  handleToggle(
    value: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ): void;
  labelText: string;
}
export default ({ isOn, handleToggle, labelText }: IProps) => (
  <div style={{ margin: 30, float: "right" }}>
    <label style={{ color: "white" }}>{labelText}</label>
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
    />
    <label
      className="react-switch-label"
      style={{ backgroundColor: isOn ? "#06D6A0" : "gray" }}
      htmlFor={`react-switch-new`}
    >
      <span className={`react-switch-button`} />
    </label>
  </div>
);
