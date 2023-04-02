import React from 'react'
import Link from 'next/link'
import {  Typography, Card, CardContent, CardMedia  } from '@mui/material'
import {  CheckCircle  } from '@mui/icons-material'



import {  demoThumbnailUrl, demoVideoUrl, demoChannelUrl } from '../utils/constants'


type Props = {
    video: any
}

export default function VideoCard({video: {id: {videoId}, snippet}}: Props) {
  return (
    <Card className="max-w-[358px] md:max-w-[270px] lg:max-w-[300px] shadow-[0] rounded-[0]">
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} className="w-[358px] h-[180px]" 
            />
        </Link>

        <CardContent className="bg-[#1e1e1e] max-h-[106px] md:max-h-[150px]" >
            <Link href={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60)}
                </Typography>
            </Link>

            <Link href={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}