import moment from 'moment'
import React from 'react'

function Minds({ data }) {
  return (
    <div className="mx-24 flex flex-col items-center py-8 border-y-2 mb-24">
      <h2 className="text-xl mb-6">Minds</h2>
      <div className="flex gap-8">
        {data.map(e => <div className="w-full flex gap-4">
            <img src={e.multimedia[0].url} className="w-48 h-48 object-cover object-top aspect-[8/5]" />
            <div className="w-full flex flex-col gap-2 pt-2.5">
              <div className="text-sm">
                {moment(e.published_date).format("MMMM Do, YYYY")}
              </div>
              <h1 className="text-lg font-bold leading-relaxed ellipsis-title">{e.title}</h1>
              <div className="text-neutral-400 text-sm leading-6 ellipsis-description">
                {e.abstract}
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Minds