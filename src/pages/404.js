import Link from "next/link";
import styles from "src/styles/NewsFeed.module.css";

const NotFound = () => {
  return (
    <div className={styles["error-layout-container"]}>
      <div className={styles["error-code"]}>404</div>
      <h1 style={{ color: "white" }}>Oops!! Looks like there was an error.</h1>
      <Link href="news-feed/general">
        <button className={styles["error-button"]}>Go back</button>
      </Link>
    </div>
  );
};

export default NotFound;
