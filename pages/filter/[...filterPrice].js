import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.filterPrice || [];
  console.log(min, max);
  const filterData = carsData.filter(
    (car) => car.price > min && car.price < max
  );
  if (!filterData.length) return <h3 className="text-center">Not Found!</h3>;
  return <CarList data={filterData} />;
}

export default FilterCars;
