import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchData } from '../utils/fetchData'



const Home: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos([])
    fetchData(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
    .catch((err) => console.error(err))
  }, [selectedCategory])

  return (
  <Stack className='flex flex-col md:flex-row' >  
    <Box className='h-auto md:h-[92vh] border-r border-r-[#3d3d3d] px-0 md:px-2' >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="hidden md:block" variant='body2' sx={{mt: 1.5, color: "#fff"}}>
            Copyright © 2023 Kulklex
        </Typography>
    </Box>

    <Box p={2} className="overflow-y-auto h-[90vh] flex-[2]">
      <Typography variant='h4' fontWeight="bold" mb={2} className="text-white">
        {selectedCategory}<span  className='text-[#FC1503]'> videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  </Stack>
  )
}

export default Home
