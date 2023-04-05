import React from 'react'
import { Box, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link  from 'next/link';
import { demoProfilePicture } from '../utils/constants';
import Image from 'next/image'



type Props = {
    channelDetails: any
    marginTop?: string
}

export default function ChannelCard({channelDetails, marginTop}: Props) {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px', marginTop: marginTop}} className="flex justify-center items-center w-[358px] max-w-[358px] md:max-w-[270px] lg:max-w-[310px]  h-[160px] md:h-[180px] max-h-[180px] text-white">
      <Link href={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent className="flex flex-col justify-center items-center text-[#fff]">
          <Image height={100} width={100}  className="rounded-[50%] h-[100px] w-[100px]" alt="channel-image"
            src={channelDetails?.snippet?.thumbnails?.high?.url}
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