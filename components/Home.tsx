import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'




const Home: NextPage = () => {
  return (
  <Stack className='flex flex-col md:flex-row' >  
    <Box className='h-auto md:h-[92vh] border-r border-r-[#3d3d3d] px-0 md:px-2' >
        <Sidebar />
        <Typography className="hidden md:block" variant='body2' sx={{mt: 1.5, color: "#fff"}}>
            Copyright © 2023 Kulklex
        </Typography>
    </Box>
  </Stack>
  )
}

export default Home
