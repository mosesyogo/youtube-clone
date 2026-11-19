import React from 'react'
import VideoCard from './VideoCard'
import './RecommendedVideos.css'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos'>
            <VideoCard
            title="Become a Web Developer in 10 minutes | 2019/2020"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://i.pravatar.cc/100?img=12"
            channel="Sonny Sangha"
            image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
        />
            <VideoCard
            title="Learn React in 1 Hour | Beginner Tutorial"
            views="1.1M Views"
            timestamp="1 week ago"
            channelImage="https://i.pravatar.cc/100?img=5"
            channel="Code Academy"
            image="https://picsum.photos/seed/react/480/270"
            />
            <VideoCard
            title="Build a YouTube Clone with React and Firebase"
            views="860K Views"
            timestamp="2 weeks ago"
            channelImage="https://i.pravatar.cc/100?img=8"
            channel="Dev Simplified"
            image="https://picsum.photos/seed/youtube/480/270"
            />
            <VideoCard
            title="CSS Flexbox Explained in 15 Minutes"
            views="540K Views"
            timestamp="1 month ago"
            channelImage="https://i.pravatar.cc/100?img=15"
            channel="Web Wizards"
            image="https://picsum.photos/seed/flexbox/480/270"
            />
            <VideoCard
            title="JavaScript ES6 Crash Course"
            views="3.4M Views"
            timestamp="2 months ago"
            channelImage="https://i.pravatar.cc/100?img=20"
            channel="JS Mastery"
            image="https://picsum.photos/seed/javascript/480/270"
            />
            <VideoCard
            title="Material UI Tutorial for Beginners"
            views="410K Views"
            timestamp="3 months ago"
            channelImage="https://i.pravatar.cc/100?img=32"
            channel="UI Lab"
            image="https://picsum.photos/seed/mui/480/270"
            />
            <VideoCard
            title="React Hooks Explained: useState and useEffect"
            views="720K Views"
            timestamp="4 months ago"
            channelImage="https://i.pravatar.cc/100?img=47"
            channel="Hook Heroes"
            image="https://picsum.photos/seed/hooks/480/270"
            />
            <VideoCard
            title="Deploy Your React App to Firebase Hosting"
            views="295K Views"
            timestamp="5 months ago"
            channelImage="https://i.pravatar.cc/100?img=53"
            channel="Cloud Coders"
            image="https://picsum.photos/seed/firebase/480/270"
            />
    
        </div>
    </div>
  )
}

export default RecommendedVideos