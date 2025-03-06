import { Geist, Geist_Mono } from "next/font/google";
import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import AllButton from "@/components/modules/AllButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}
