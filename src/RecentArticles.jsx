import moment from 'moment'
import React from 'react'

function RecentArticles({ data }) {
  return (
    <div className="w-9/12">
      <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
      <div className="grid grid-cols-3 gap-8">
        {data.map(e => <div className="w-full flex flex-col gap-4">
          <img src={e.multimedia[0].url} className="w-full object-cover object-top aspect-[8/5]" />
          <div className="w-full flex flex-col gap-2">
            <div className="text-sm">
              {moment(e.published_date).format("MMMM Do, YYYY")} | {e.section}
            </div>
            <h1 className="text-xl font-bold leading-relaxed ellipsis-title">{e.title}</h1>
            <div className="text-neutral-400 text-sm leading-6 ellipsis-title">
              {e.abstract}
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default RecentArticles;