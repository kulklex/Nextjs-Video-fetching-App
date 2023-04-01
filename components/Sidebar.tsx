import React, { Dispatch, SetStateAction } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'




type Props = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>
}

export default function Sidebar({selectedCategory, setSelectedCategory}: Props) {
  return (
    <Stack className="overflow-y-scroll h-auto md:h-[95%] flex flex-row md:flex-col">
      {categories?.map((cat, i) => (
        <button key={cat.name + i} onClick={() => setSelectedCategory(cat.name)}
          className={`${selectedCategory === cat.name && "bg-[#FC1503]" } category-btn font-bold capitalize flex items-center justify-start cursor-pointer outline-none border-[0] py-3 px-6 my-4 mx-0 rounded-[20px] hover:bg-[#FC1503] text-white `}
        >
          <span className='mr-1'>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  )
}