import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import Videos   from "../../components/Videos"
import ChannelCard from "../../components/ChannelCard"
import { fetchData } from "../../utils/fetchData"
import Navbar from '../../components/Navbar'

type Props = {
  id: string
}

export default function ChannelDetail({id}: Props) {
  const [channelDetails, setChannelDetails] = useState([])
  const [videos, setVideos] = useState([])




  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetails(data?.items[0]))
    .catch((err) => console.log(err))

    fetchData(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
    .catch((err) => console.log(err)) 
}, [id])



  return (<>
    <Navbar/>
    <Box minHeight="95vh">
      <Box className="bg-black">
        <div style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex: 10,}} className="h-[200px] md:h-[250px] lg:h-[300px]" />
        <ChannelCard channelDetails={channelDetails} marginTop='-93px'/>
      </Box>
      <Box p={2} display="flex" className="bg-black">
        <Box sx={{ mr: { sm: '100px' } }}  />
        <Videos videos={videos} />
      </Box>
    </Box>
  </>)
}




export const getServerSideProps = async ({params: {id}} : {params:{id: string}}) => {

  return {
    props: {
      id
    }
  }
}