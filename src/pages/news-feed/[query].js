import { useState } from "react";
import Head from "next/head";
import currentHeadlines from "src/pages/api/headlines";
import NewsHeadlineList from "src/components/NewsHeadlineList";
import NewsFeedTabs from "@/components/NewsFeedTabs";
import { API_KEY } from "src/constants/common";
import { getCategoryHeadlines } from "src/pages/api/getCategoryHeadlines";

const NewsFeedTabContent = ({ headlines, params }) => {
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { query: "general" } },
      { params: { query: "business" } },
      { params: { query: "technology" } },
      { params: { query: "sports" } },
      { params: { query: "entertainment" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${params.query}`;

  const headlines = await getCategoryHeadlines(URL);

  return { props: { headlines, params } };
}

export default NewsFeedTabContent;
