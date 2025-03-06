import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";
import CarDetail from "@/components/templates/CarDetail";

function DetailsCar() {
  const router = useRouter();
  const { carsId } = router.query;
  const carDetails = carsData[Number(carsId) - 1];
  return (
    <CarDetail carDetails={carDetails}/>
  );
}

export default DetailsCar
