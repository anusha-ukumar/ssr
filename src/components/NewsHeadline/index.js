import { get } from "lodash";
import { formatDate } from "src/utils/date-utils";
import styles from "./index.module.css";

const NewsHeadline = ({ headline }) => {
  const dateMetadata = formatDate(get(headline, "publishedAt"));
  console.log("dateMetadata: ", dateMetadata);

  return (
    <a className={styles.headline} href={headline.url} target="_blank">
      <div className={styles["headlines-container"]}>
        <div className={styles["headlines-details"]}>
          <div className={styles["headline-title"]}>{headline.title}</div>
          <div className={styles["headline-metadata"]}>
            {get(headline, "author") && (
              <div>{`Author: ${get(headline, "author")}`}</div>
            )}
            <div>{`Source: ${get(headline, "source.name")}`}</div>
            <div
              className={
                dateMetadata.isRecent
                  ? styles["headline-metadata-time--red"]
                  : ""
              }
            >
              {dateMetadata.date}
            </div>
          </div>
          <div>{headline.description}</div>
        </div>
        <div className={styles["headline-image-conainter"]}>
          <img src={headline.urlToImage} alt={headline.title} height={200} width={350} />
        </div>
      </div>
      <hr className={styles["hr"]} />
    </a>
  );
};

export default NewsHeadline;
