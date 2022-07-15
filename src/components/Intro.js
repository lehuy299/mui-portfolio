import React from 'react'
import { Box } from '@mui/material';

const Intro = () => {
  return (
    <Box sx={{ height: '100vh', position: 'relative', top: '-64px' }}>
        {/* <Box sx={{ backgroundImage: "url(images/huy_window4k.jpg)", height: '100%', width: '100%', position: 'absolute' }}/> */}
        <Box sx={{ height: '100%', width: '100%', position: 'absolute', objectFit: 'cover' }} component='img' src='images/huy_window4k.jpg' />
        <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%', width: '100%', position: 'absolute' }}/>
    </Box>
  )
}

export default Intro