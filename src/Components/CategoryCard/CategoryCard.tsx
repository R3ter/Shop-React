import ArrowButton from "../ArrowButton/ArrowButton";
import "./style.scss";
interface IProps {
  title: string;
  description: string;
  imageLink: string;
  id: string;
}
export default ({ title, imageLink, description, id }: IProps) => {
  return (
    <div className="CategoryCard">
      <div
        className="Image"
        style={{ backgroundImage: `url(${imageLink})` }}
      ></div>
      <h1 className="Title">{title}</h1>
      <h2 className="Description">{description}</h2>
      <ArrowButton link={"ShoePage/" + id} type="Secondary" title="Shop now" />
    </div>
  );
};
