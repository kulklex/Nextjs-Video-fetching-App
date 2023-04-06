import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'


type Props = {
    videos: any[],
    direction?: any
}

export default function Videos({videos, direction}: Props) {
  
  if (!videos?.length) return <Loader />


  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2} className='text-white'>
      {videos && videos.map((video, index) => (
        <Box key={index} >
          {video.id.channelId && <ChannelCard channelDetails={video} />}
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  )
}