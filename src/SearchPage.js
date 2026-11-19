import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css'


function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
           
        </div>
         <hr/>
       
           <ChannelRow
            image="https://yt3.ggpht.com/KGz5AbTpZxnLzfI3RjMIISbTzggeue4tssv2rOXRrmYVoYLrPfoxVt4br2iQrNzGvrQpowC4X8s=s600-c-k-c0x00ffffff-no-rj-rp-mo"
            channel="React clones app"
            verified
            subs="660K"
            noOfVideos={382}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will make you a better developer!"
        />
         <hr/>

         <VideoRow
         views="2.3M views"
         subs="660K"
         description="Learn how to become a web developer in just 10 minutes with HTML, CSS and JavaScript."
         timestamp="3 days ago"
         channel="Sonny Sangha"
         title="Become a Web Developer in 10 minutes | 2019/2020"
         image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
         />

         <VideoRow
         views="1.1M views"
         subs="420K"
         description="A complete beginner tutorial covering components, props, state and hooks in React."
         timestamp="1 week ago"
         channel="Code Academy"
         title="Learn React in 1 Hour | Beginner Tutorial"
         image="https://picsum.photos/seed/react/480/270"
         />

         <VideoRow
         views="860K views"
         subs="310K"
         description="Build a full YouTube clone step by step using React, Material UI and Firebase."
         timestamp="2 weeks ago"
         channel="Dev Simplified"
         title="Build a YouTube Clone with React and Firebase"
         image="https://picsum.photos/seed/youtube/480/270"
         />

         <VideoRow
         views="540K views"
         subs="185K"
         description="Understand flexbox from scratch: main axis, cross axis, wrapping and alignment."
         timestamp="1 month ago"
         channel="Web Wizards"
         title="CSS Flexbox Explained in 15 Minutes"
         image="https://picsum.photos/seed/flexbox/480/270"
         />


    </div>
  )
}

export default SearchPage