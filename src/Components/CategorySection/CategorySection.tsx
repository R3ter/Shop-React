import { useQuery } from "react-query";
import { fetchData } from "../../Static/Api";
import CategoryCard from "../CategoryCard/CategoryCard";
import LoadingSpinner from "../Loaing/LoadingSpinner/LoadingSpinner";
import ShoeCard from "../ShoeCard/ShoeCard";
import "./style.scss";
export default () => {
  const { data, isFetching } = useQuery("MainShoes", fetchData("Shoes"));
  return (
    <div className="CategorySection">
      {isFetching ? (
        <LoadingSpinner
          type="normal"
          backgroundOpacity={0}
          style={{ margin: "50px" }}
        />
      ) : (
        data && (
          <div>
            {data?.slice(0, 3).map((e: any) => {
              return (
                <CategoryCard
                  id={e.id}
                  title={e.name}
                  description={e.description}
                  imageLink={e.image}
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};
