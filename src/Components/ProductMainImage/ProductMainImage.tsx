import { useState } from "react";
import Switch from "../Switch/Switch";
import THreeDTest from "../ThreeD/THreeDTest";
import "./style.scss";
interface IProps {
  id: string;
  image: string;
}
export default ({ image }: IProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="ProductMainImage">
        <div style={{ backgroundImage: `url(${image})` }}>
          {toggle && <THreeDTest style={{ width: "100%", height: "100%" }} />}
        </div>
      </div>
      <Switch
        labelText="3D Model"
        isOn={toggle}
        handleToggle={(e) => {
          setToggle(!toggle);
        }}
      />
    </>
  );
};
