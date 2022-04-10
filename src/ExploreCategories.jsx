import { Icon } from '@iconify/react'
import React from 'react'

function ExploreCategories() {
  return (
    <div className="p-8 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold pb-6 mb-6 border-b">Explore Categories</h2>
      <div className="flex flex-col gap-4">
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://ychef.files.bbci.co.uk/976x549/p0b926m6.jpg')] bg-top bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          World
        </a>
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg')] bg-top bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          U.S.
        </a>
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://p1.pxfuel.com/preview/849/426/457/united-states-capitol-politics-government-america-usa-capitol.jpg')] bg-center bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          Politics
        </a>
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://cdn.britannica.com/52/139052-131-7A7975D1/Balls-shapes-colors-sizes-sports.jpg')] bg-top bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          Sports
        </a>
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://assets.weforum.org/global_future_council/image/VnluLB1ZpDBqc_2K7hPKDMcu3KAYgbmyriHPs0P6Irk.jpg')] bg-top bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          Entertainment
        </a>
        <a target="_blank" className="flex items-center shadow-md p-6 rounded-md relative bg-[url('https://www.pcworld.com/wp-content/uploads/2021/10/intel-cpu-rocket-lake-rear.jpg?quality=50&strip=all&w=1024')] bg-center bg-cover bg-black/40 bg-blend-color text-white text-lg mt pt-7">
          Technology
        </a>
      </div>
    </div>
  )
}

export default ExploreCategories;