import React from "react";
import Router from "next/router";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/Drawer";
import NewsCard from "../../components/NewsCard";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styles from "./[country].module.css";

const countryNames = {
  hu: "Hungary",
  us: "the United States",
  gb: "the United Kingdom",
};

export default function Country({ data, country }) {
  const changeCountry = async (country) => {
    document.documentElement.scrollTop = 0;
    Router.push(`/headlines/${country}`);
  };
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className="flex">
        <div className="post-container mx-auto">
          <Drawer onClick={changeCountry} />
          <div className={styles.title}>
            Top Neeews from {countryNames[country]}
          </div>
          <div className="flex">
            <div>
              {data ? (
                data.map((news, index) => <NewsCard news={news} key={index} />)
              ) : (
                <>Waiting for headlines</>
              )}
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { country } = params;
  const res = await fetch(
    `https://neeews-api-gateway-7s15zqs4.nw.gateway.dev/api/news/headlines?country=${country}`
  );
  const data = await res.json();
  return { props: { data, country } };
}
