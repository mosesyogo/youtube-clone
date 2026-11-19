import React from 'react'
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import './ChannelRow.css'

function ChannelRow({image,channel,verified,subs,noOfVideos,description }) {
  return (
    <div className='channelRow'>
         <Avatar className='channelRow__logo' alt={channel} src={image} />
         <div className='channelRow__text'>
            <h4>
                {channel} {verified && <CheckCircleOutlinedIcon className='channelRow__verified' />}
            </h4>
             <p>
                {subs} subscribers • {noOfVideos} videos
           </p>
            <p>{description}</p>
         </div>
    </div>
  )
}

export default ChannelRow