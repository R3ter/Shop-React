import "./style.scss";
interface IProps {
  type?: "static" | "normal";
  style?: React.CSSProperties;
  backgroundOpacity?: number;
}
export default ({
  type = "static",
  style = {},
  backgroundOpacity = 0.7,
}: IProps) => {
  return (
    <section
      className={type == "static" ? "LoadingSpinnerStatic" : "LoadingSpinner"}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
        ...style,
      }}
    >
      <section className="lds-roller">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </section>
    </section>
  );
};
