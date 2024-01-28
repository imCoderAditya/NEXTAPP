import styles from "../app/styles/home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.imageSlider}>
        <img
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=996&t=st=1706167119~exp=1706167719~hmac=a839e931c0d3da558cd90f369f6aac55106a3a9ef1045e0ae32c4f8b34d8a3ce"
          alt=""
        />
      </div>
    </main>
  );
}
