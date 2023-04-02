import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link  from 'next/link';
import { demoProfilePicture } from '../utils/constants';




type Props = {
    channelDetails: any
    marginTop?: string
}

export default function ChannelCard({channelDetails, marginTop}: Props) {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px', marginTop: marginTop}} className="flex justify-center items-center h-[326px] m-auto text-white">
      <Link href={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent className="flex flex-col justify-center items-center text-[#fff]">
          <CardMedia  alt={channelDetails?.snippet?.title} className="rounded-[50%] h-[100px] w-[100px]"
            image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          />

          <Typography variant="h6">
            {channelDetails?.snippet?.title}{' '}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
          </Typography>

          {channelDetails?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}