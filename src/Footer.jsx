import React from 'react'
import Logo from "./assets/logo.svg"

function Footer() {
  return (
    <div className="w-full border-t-2 px-24 py-12 flex flex-col gap-12 items-center">
      <img src={Logo} className="h-10 mb-8" />
      <div className="w-full justify-between flex">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl mb-6">News</h3>
          <a>Home Page</a>
          <a>World</a>
          <a>Coronavirus</a>
          <a>U.S. News</a>
          <a>U.S. Politics</a>
          <a>New York</a>
          <a>Business</a>
          <a>Tech</a>
          <a>Science</a>
          <a>Sports</a>
          <a>Winter Olympics</a>
          <a>Wildfire Tracker</a>
          <a>Obituaries</a>
          <a>Today's Paper</a>
          <a>Trending</a>
          <a>Corrections</a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl mb-6">Opinion</h3>
          <a>Today's Opinion</a>
          <a>Columnists</a>
          <a>Editorials</a>
          <a>Guest Essays</a>
          <a>Letters</a>
          <a>Sunday Review</a>
          <a>Opinion Video</a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl mb-6">Arts</h3>
          <a>Today's Arts</a>
          <a>Art & Design</a>
          <a>Books</a>
          <a>Best Sellers Book List</a>
          <a>Dance</a>
          <a>Movies</a>
          <a>Music</a>
          <a>Pop Culture</a>
          <a>Television</a>
          <a>Theater</a>
          <a>Video: Arts</a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl mb-6">Life</h3>
          <a>Automotive</a>
          <a>Games</a>
          <a>Education</a>
          <a>Food</a>
          <a>Health</a>
          <a>Jobs</a>
          <a>Love</a>
          <a>Magazine</a>
          <a>Parenting</a>
          <a>Real Estate</a>
          <a>Style</a>
          <a>T Magazine</a>
          <a>Travel</a>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl mb-6">More</h3>
          <a>Reader Center</a>
          <a>The Athletic</a>
          <a>Wirecutter</a>
          <a>Cooking</a>
          <a>Headway</a>
          <a>Live Events</a>
          <a>The Learning Network</a>
          <a>Tools & Services</a>
          <a>Podcasts</a>
          <a>Video</a>
          <a>TimesMachine</a>
          <a>NYT Store</a>
          <a>Manage My Account</a>
          <a>NYTLicensing</a>
        </div>
      </div>
    </div>
  )
}

export default Footer