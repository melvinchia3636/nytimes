import { useEffect, useState } from "react"
import ExploreCategories from "./ExploreCategories";
import Footer from "./Footer";
import Headlines from "./Headlines";
import Minds from "./Minds";
import Navbar from "./Navbar";
import RecentArticles from "./RecentArticles";
import SocialConnect from "./SocialConnect";
import TopArticles from "./TopArticles";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Z9BauBg3MraZsgrhqsCW9ZtmtxiHvnTy")
      .then(e => e.json())
      .then(({ results }) => setData(results))
  }, []);

  return (
    <>
      {data && <>
        <Headlines data={data.filter(e => ['us', 'world', 'politics', 'technology'].includes(e.section))[0]} />
        <TopArticles data={data.filter(e => ['us', 'world', 'politics', 'technology'].includes(e.section)).slice(1, 6)} />
        <Minds data={data.filter(e => e.section === "well").slice(0,3)} />
        <div className="flex w-full px-24 pb-24 gap-12">
          <RecentArticles data={data.sort((a, b) => new Date(a.published_date) > new Date(b.published_date)).slice(0, 9)} />
          <div className="w-4/12 flex flex-col gap-8">
            <SocialConnect />
            <ExploreCategories />
          </div>
        </div>
      </>}
    </>
  )
}

export default Home;
