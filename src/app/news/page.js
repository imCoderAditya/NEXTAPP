import styles from "../styles/home.module.css";

export default function News() {
  return (
    <main>
      <div className={styles.imageSlider}>
        <img
          src="https://cdn.pixabay.com/photo/2023/12/04/21/39/spiderweb-8430411_1280.jpg"
          alt=""
        />
      </div>
    </main>
  );
}
