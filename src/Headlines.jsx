import React from 'react'
import moment from 'moment'

function Headlines({data}) {
  return (
    <div className="w-full relative flex items-center px-24 h-[28rem]">
      <img src={data.multimedia[0].url} className="absolute top-0 left-0 h-full w-full object-cover object-top brightness-[50%]" />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="text-white">
          {moment(data.published_date).format("MMMM Do, YYYY")}  |  {data.section}  |  {data.byline}
        </div>
        <h1 className="text-4xl font-bold w-7/12 leading-relaxed text-white">{data.title}</h1>
        <div className="w-7/12 leading-8 text-white">
          {data.abstract}
        </div>
      </div>
    </div>
  )
}

export default Headlines