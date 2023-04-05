import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  Typography, Card, CardContent, } from '@mui/material'
import {  CheckCircle  } from '@mui/icons-material'
import moment from 'moment'


import {  demoThumbnailUrl, demoVideoUrl, demoChannelUrl } from '../utils/constants'


type Props = {
    video: any
}

export default function VideoCard({video: {id: {videoId}, snippet}}: Props) {
  return (
    <Card className="max-w-[358px] md:max-w-[270px] lg:max-w-[310px] shadow-[0] rounded-[0]">
        <Link href={`/video/${videoId}`} >
            <Image alt="video-image" width={358} height={180}
                src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} className="w-[358px] h-[180px]" 
            />
        </Link>

        <CardContent className="bg-[#1e1e1e] h-[160px] md:h-[200px] max-h-[200px]" >
            <Link href={`/video/${videoId}`} >
                <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60)}
                </Typography>
            </Link>

            <Link href={`/channel/${snippet?.channelId}`} >
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                </Typography>
            </Link>
            
            <Typography variant='body2' className="text-white mt-2 mb-1">
                {moment(snippet?.publishedAt).fromNow()}
            </Typography>
            

        </CardContent>
    </Card>
  )
}