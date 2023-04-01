import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

type Props = {
    videos: any[],
}

export default function Videos({videos}: Props) {
  console.log(videos)



  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos && videos.map((video, index) => (
        <Box key={index} >
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.videoId && <ChannelCard channelDetails={video} />}
        </Box>
      ))}
    </Stack>
  )
}