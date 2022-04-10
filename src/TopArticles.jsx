import moment from 'moment'
import React from 'react'

function TopArticles({ data }) {
  return (
    <div className="px-24 w-full py-24 flex gap-12">
      <div className="w-3/12 flex flex-col gap-8">
        {Array(2).fill(0).map((_, i) => i+1).map(e => <div className="w-full flex flex-col gap-4">
          <img src={data[e].multimedia[0].url} className="w-full h-full object-cover object-top aspect-[8/5]" />
          <div className="w-full flex flex-col gap-2">
            <div className="text-sm">
              {moment(data[e].published_date).format("MMMM Do, YYYY")}
            </div>
            <h1 className="text-lg font-bold leading-relaxed ellipsis-title">{data[e].title}</h1>
          </div>
        </div>)}
      </div>
      <div className="w-6/12">
        <div className="w-full flex flex-col gap-6">
          <img src={data[0].multimedia[0].url} className="w-full h-full object-cover object-top aspect-[8/5]" />
          <div className="w-full flex flex-col items-center gap-2">
            <div>
              {moment(data[0].published_date).format("MMMM Do, YYYY")}
            </div>
            <h1 className="text-2xl font-bold leading-relaxed text-center">{data[0].title}</h1>
            <div className="text-center leading-8 text-neutral-400">
              {data[0].abstract}
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 flex flex-col gap-8">
        {Array(2).fill(0).map((_, i) => i+3).map(e => <div className="w-full flex flex-col gap-4">
          <img src={data[e].multimedia[0].url} className="w-full h-full object-cover object-top aspect-[8/5]" />
          <div className="w-full flex flex-col gap-2">
            <div className="text-sm">
              {moment(data[e].published_date).format("MMMM Do, YYYY")}
            </div>
            <h1 className="text-lg font-bold leading-relaxed ellipsis-title">{data[e].title}</h1>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default TopArticles