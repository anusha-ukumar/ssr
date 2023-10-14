import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";
import tabs from "src/pages/api/tabs";
import styles from "./index.module.css";

const NewsFeedTabs = ({ children, tabIndex, setTabIndex }) => {
  const onTabChange = (event) => {
    setTabIndex(event.target.id);
  };

  return (
    <div className={styles["layout-container"]}>
      <div className={styles["layout-content"]}>
        <div className={styles["tabs-container"]}>
          <Tabs value={parseInt(tabIndex)} centered
          scrollButtons="auto"
          sx = {{
            "& button" : {fontFamily: "ui-monospace"},
            "& button:hover": { color: "plum" }
          }}
          >
            {tabs.map((tab, index) => {
              return (
                <Link key={tab.id} href={`/news-feed/${tab.category}`}>
                  <Tab
                    id={index}
                    key={tab.id}
                    label={tab.label}
                    value={index}
                    sx={{ color: "white" }}
                    onClick={onTabChange}
                  />
                </Link>
              );
            })}
          </Tabs>
        </div>
        {children}
      </div>
    </div>
  );
};

export default NewsFeedTabs;
