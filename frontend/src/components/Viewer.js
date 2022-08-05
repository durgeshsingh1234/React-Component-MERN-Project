import React from 'react'
import {Button} from '@mui/material';
import JsxParser from 'react-jsx-parser';
import { useParams } from 'react-router-dom';
const Viewer = () => {

  const raw_code = `<Button variant="contained" color='error'>Nice</Button>`;

  const { id }= useParams();

 return (
    <div className='viewer'>
        <h3 style={{color:'black'}}> <b>Component Name</b> </h3>
        <h4 style={{color:'black'}}> <b>Uploaded By</b> </h4>
        <div className='viewerdiv'>
        <JsxParser jsx={raw_code} components={{ Button }} />
        </div>
        <Button  variant="contained" type="submit" color='primary' sx={{mt:5}}>Share Code</Button>
        <div className='viewerdiv2'></div>
        
    </div>
  )
}

export default Viewer