import React, { useState, useEffect } from 'react'
import ReactPlayer from "react-player/youtube"
import { Typography, Box, Stack } from "@mui/material"
import CheckCircle from "@mui/icons-material/CheckCircle"
import Videos from '../../components/Videos'
import Loader from '../../components/Loader'
import { fetchData } from '../../utils/fetchData'
import Link from 'next/link'


type Props = {
  id: any
}

export default function VideoDetail({id}: Props) {
  
  const [videoDetails, setVideoDetails] = useState<any>()
  const [relatedVideos, setRelatedVideos] = useState<any>()

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => {setVideoDetails(data?.items[0])})
    .catch((err) => console.error(err))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => {setRelatedVideos(data?.items)})
    .catch((err) => console.error(err))
  }, [id])

  
  if (!videoDetails?.snippet) return <Loader />

  return (
    <Box minHeight="95vh">
      <Stack className="flex flex-col md:flex-row bg-black" >
        <Box className="flex-[1]">
          <Box className="w-full sticky top-[86px] px-1">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"  controls 
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} className="flex justify-center items-center">
              {videoDetails?.snippet?.title}
            </Typography>

            <Stack className="flex md:flex-row justify-center  items-center gap-[10px] lg:gap-[20px] text-[#fff] py-1 px-2">
              <Link href={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography className="text-lg md:text-xl"  color="#fff">
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>

              <Stack className="flex md:flex-row gap-[10px] lg:gap-[20px] items-center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
          
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            <Typography  color="#fff" className="flex justify-center items-center text-center pb-2 font-sans text-extrabold text-lg md:text-xl">
              Related Videos
            </Typography>
            <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}








export const getServerSideProps = async ({params: {id}} : {params:{id: string}}) => {
  
  return {
    props: {
      id,
    }
  }
}