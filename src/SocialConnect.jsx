import { Icon } from '@iconify/react'
import React from 'react'

function SocialConnect() {
  return (
    <div className="p-8 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold pb-6 mb-6 border-b">Social Connect</h2>
      <div className="flex flex-col gap-4">
        <a href="https://www.facebook.com/nytimes/" target="_blank" className="flex items-center justify-center shadow-md p-6 rounded-md relative">
          <Icon icon="cib:facebook-f" className="h-5 w-5 absolute left-5" />
          Follow
        </a>
        <a href="https://www.youtube.com/nytimes" target="_blank" className="flex items-center justify-center shadow-md p-6 rounded-md relative">
          <Icon icon="cib:youtube" className="h-5 w-5 absolute left-5" />
          Subscribe
        </a>
        <a href="https://twitter.com/nytimes" target="_blank" className="flex items-center justify-center shadow-md p-6 rounded-md relative">
          <Icon icon="cib:twitter" className="h-5 w-5 absolute left-5" />
          Follow
        </a>
        <a href="https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-us" target="_blank" className="flex items-center justify-center shadow-md p-6 rounded-md relative">
          <Icon icon="ic:baseline-mail" className="h-[1.3rem] w-[1.3rem] absolute left-5" />
          Get in touch
        </a>
      </div>
    </div>
  )
}

export default SocialConnect