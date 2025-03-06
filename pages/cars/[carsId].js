import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

export default function CarDetail() {
  const router = useRouter().query;
  const { carsId } = router;
  const carDetails = carsData[carsId - 1];
  return <div>{carsId}</div>;
}
