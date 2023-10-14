import { useState } from "react";
import Head from 'next/head';
import currentHeadlines from "src/pages/api/headlines";
import NewsHeadlineList from "src/components/NewsHeadlineList";
import NewsFeedTabs from "@/components/NewsFeedTabs";
import { API_KEY } from "src/constants/common";
import { getCategoryHeadlines } from "src/pages/api/getCategoryHeadlines";


const NewsFeedTabContent = ({ headlines }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NewsFeedTabs tabIndex={tabIndex} setTabIndex={setTabIndex}>
        <NewsHeadlineList headlines={headlines} />
      </NewsFeedTabs>
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log("params ", params.query);
  console.log("currentHeadlines ", currentHeadlines);

  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${params.query}`;

//   const headlines = currentHeadlines.articles;
    const headlines = await getCategoryHeadlines(URL);

  return { props: { headlines } };
}

export default NewsFeedTabContent;
