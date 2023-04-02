import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

type Props = {
    videos: any[],
}

export default function Videos({videos}: Props) {
  

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} className='text-white'>
      {videos && videos.map((video, index) => (
        <Box key={index} >
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetails={video} />}
        </Box>
      ))}
    </Stack>
  )
}