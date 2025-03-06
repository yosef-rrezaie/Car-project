import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details
