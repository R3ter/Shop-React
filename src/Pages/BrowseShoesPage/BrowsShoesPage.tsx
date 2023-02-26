import { useQuery } from "react-query";
import LoadingSpinner from "../../Components/Loaing/LoadingSpinner/LoadingSpinner";
import ShoeCards from "../../Components/ShoeCards/ShoeCards";
import { fetchData } from "../../Static/Api";
import "./style.scss";

export default () => {
  const { data, isLoading, isFetched } = useQuery("shoes", fetchData("Shoes"));
  return (
    <div className="BrowseShoesPage">
      <div>
        <h1 className="title">TRAVEL PACKS</h1>
        {isLoading && <LoadingSpinner type="static" />}
        {isFetched && !isLoading && !!data && <ShoeCards shoes={data} />}
      </div>
    </div>
  );
};
