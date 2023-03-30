import React from 'react'
import { Stack } from "@mui/material"
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <Stack direction="row" alignItems="center" p={2} className='sticky bg-[#000] top-[0] justify-between'>
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" width={45} height={45} className='h-[45] w-[45]' />
      </Link>
      <SearchBar />
    </Stack>
  )
}