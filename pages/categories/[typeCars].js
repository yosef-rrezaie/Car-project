import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

function TypeCars() {
  const router = useRouter();
  const { typeCars } = router.query;
  console.log(typeCars);
  const result = carsData.filter((car) => car.category === typeCars);
  return <CarList data={result} />;
}

export default TypeCars;
