import "./style.scss";
interface IProps {
  title: string;
  id: string | undefined;
  imageLink: string;
  description: string | undefined;
  price: string;
  refs: any;
}
export default ({ description, id, imageLink, price, title, refs }: IProps) => {
  return (
    <>
      <div className="DialogInput">
        <label htmlFor="name" className="label">
          Title
        </label>
        <input
          ref={refs.titleText}
          type="text"
          className="input"
          id="name"
          value={title}
        />
        <br></br>
        <label htmlFor="image" className="label">
          Image link
        </label>
        <input
          ref={refs.imageText}
          type="text"
          className="input"
          id="image"
          value={imageLink}
        />
        <br></br>

        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          ref={refs.descText}
          className="input"
          value={description}
          id="description"
          style={{ height: "150px" }}
        />
        <label htmlFor="price" className="label">
          Price
        </label>
        <input
          ref={refs.priceText}
          value={price}
          type="text"
          className="input"
          id="price"
          style={{ width: "20%" }}
        />
        <br></br>
      </div>
    </>
  );
};
