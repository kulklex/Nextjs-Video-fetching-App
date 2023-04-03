import React, {useEffect, useState} from 'react'
import { Typography, Box } from '@mui/material'
import Videos from '../../components/Videos'
import {fetchData} from '../../utils/fetchData'
import {useRouter} from 'next/router'

type Props = {
  searchTerm: string
}

export default function SearchFeed({searchTerm}: Props) {
  const router = useRouter()


  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
    .catch((err) => console.error(err))
  }, [searchTerm])
  
  return (
  <Box p={2} minHeight="95vh" className="bg-black">
    <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
      Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> 
    </Typography>
    <Box display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
      {<Videos videos={videos} />}
    </Box>
  </Box>
  )
}

export const getServerSideProps = async ({params: {searchTerm}} : {params:{searchTerm: string}}) => {

  return {
    props: {
      searchTerm
    }
  }
}

