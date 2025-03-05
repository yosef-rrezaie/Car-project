import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}


export default CarsPage;
