import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Category() {
  const { cat } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=Z9BauBg3MraZsgrhqsCW9ZtmtxiHvnTy`)
      .then(e => e.json())
      .then(({ results }) => setData(results))
  }, []);

  return (
    <>
      <div className="px-24 mt-12 font-bold text-3xl mb-8">{cat.split(" ").map(e => e[0].toUpperCase()+e.slice(1,)).join(" ")} Articles</div>
      {data && <div className="px-24 flex flex-col divide-y">
        {data.map(e => <div className="w-full flex gap-4 py-8">
          {e.multimedia && <img src={e.multimedia[0].url} className="object-cover object-top aspect-[8/5] w-96" />}
          <div className="w-full flex flex-col gap-2">
            <div className="text-sm">
              {moment(e.published_date).format("MMMM Do, YYYY")} | {e.section}
            </div>
            <a href={e.url} target="_blank" className="text-2xl font-bold leading-relaxed hover:underline">{e.title}</a>
            <div className="text-neutral-400 text-sm leading-6">
              {e.abstract}
            </div>
          </div>
        </div>)}
      </div>}
    </>
  )
}

export default Category