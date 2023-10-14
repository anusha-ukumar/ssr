import NewsHeadline from "../NewsHeadline";
import styles from "./index.module.css";

const NewsHeadlineList = ({ headlines =[] }) => {
    return (
        <div className={styles["scrollable-conatiner"]}>
            {headlines.map((headline, idx) => {
                return (
                    <NewsHeadline key={idx} headline={headline} />
                )
            })}
        </div>
    )

}

export default NewsHeadlineList;