import React, { useCallback, useEffect, useRef, useState } from "react";
import Router from "next/router";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/Drawer";
import NewsCard from "../../components/NewsCard";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styles from "./[country].module.css";
import throttle from "lodash/throttle";

const countryNames = {
  hu: "Hungary",
  us: "the United States",
  gb: "the United Kingdom",
};

const changeCountry = async (country) => {
  document.documentElement.scrollTop = 0;
  Router.push(`/headlines/${country}`);
};

export default function Country({ data, country }) {
  const [current, setCurrent] = useState(0);
    const keyHandler = useCallback((e) => {
      if(e.key === 'k') {
        setCurrent(current => Math.max(0, current - 1));
      }
      if(e.key === 'j') {
        setCurrent(current => Math.min(data.length - 1, current + 1));
      }
    }, [data.length, current]);
  const debouncedKeyHandler = useCallback(throttle((e) => keyHandler(e), 250, { leading: true, trailing: false}), [] );
  useEffect(() => { 
    document.addEventListener('keyup', debouncedKeyHandler);
    return () => document.removeEventListener('keydown', debouncedKeyHandler);
  },[])

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
                data.map((news, index) => <NewsCard  active={index === current} setActive={() => setCurrent(index)} country={country} news={news} key={index} />)
              ) : (
                <>Waiting for headlines</>
              )}
            </div>
          </div>
        </div>
        <ScrollToTopButton setActive={setCurrent} active={current} />
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
