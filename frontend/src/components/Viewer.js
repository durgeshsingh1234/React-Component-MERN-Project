import React from 'react'
import {Button} from '@mui/material'
const Viewer = () => {
 return (
    <div className='viewer'>
        <h3 style={{color:'black'}}> <b>Component Name</b> </h3>
        <h4 style={{color:'black'}}> <b>Uploaded By</b> </h4>
        <div className='viewerdiv'></div>
        <Button  variant="contained" type="submit" color='primary' sx={{mt:5}}>Share Code</Button>
        <div className='viewerdiv2'></div>
        
    </div>
  )
}

export default Viewer