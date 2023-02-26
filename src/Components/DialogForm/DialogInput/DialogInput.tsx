import { RefObject, useEffect, useRef } from "react";
import "./style.scss";
interface IProps {
  title: string;
  id: string | undefined;
  imageLink: string;
  description: string;
  price: string;
  onLoad(
    arg1: RefObject<HTMLInputElement>,
    arg2: RefObject<HTMLTextAreaElement>,
    arg3: RefObject<HTMLInputElement>,
    arg4: RefObject<HTMLInputElement>
  ): void;
}
export default ({
  description,
  id,
  imageLink,
  price,
  title,
  onLoad,
}: IProps) => {
  const refsTitle = useRef<HTMLInputElement>(null);
  const refsDesc = useRef<HTMLTextAreaElement>(null);
  const refsImage = useRef<HTMLInputElement>(null);
  const refsPrice = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (refsTitle.current) refsTitle.current.value = title;
    if (refsDesc.current) refsDesc.current.value = description;
    if (refsImage.current) refsImage.current.value = imageLink;
    if (refsPrice.current) refsPrice.current.value = price;
    onLoad(refsTitle, refsDesc, refsImage, refsPrice);
  }, []);
  return (
    <div className="DialogInput">
      <label htmlFor="name" className="label">
        Title
      </label>
      <input ref={refsTitle} type="text" className="input" id="name" />
      <br></br>
      <label htmlFor="image" className="label">
        Image link
      </label>
      <input ref={refsImage} type="text" className="input" id="image" />
      <br></br>

      <label htmlFor="description" className="label">
        Description
      </label>
      <textarea
        ref={refsDesc}
        className="input"
        id="description"
        style={{ height: "150px" }}
      />
      <label htmlFor="price" className="label">
        Price
      </label>
      <input
        ref={refsPrice}
        type="number"
        className="input"
        id="price"
        style={{ width: "20%" }}
      />
      <br></br>
    </div>
  );
};
