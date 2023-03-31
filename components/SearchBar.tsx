import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {  Paper, IconButton  } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type Props = {}

export default function SearchBar({}: Props) {
    const router = useRouter()

    const handleSubmit = () => {}

  return (
    <Paper component="form" onSubmit={handleSubmit} 
        className="rounded-full  border-[1px]  pl-[2] shadow-none" sx={{mr: {sm:5}}}
    >
        <input type="text" placeholder="Search..." onChange={() => {}}
            className="searchBar placeholder:p-1 p-1 border-[0] outline-none w-[200px] md:w-[300px] lg:w-[350px] bg-transparent" 
        />
        <IconButton type="submit" className='p-[10px] text-red-500'>
            <SearchIcon />
        </IconButton>
    </Paper>
  )
}