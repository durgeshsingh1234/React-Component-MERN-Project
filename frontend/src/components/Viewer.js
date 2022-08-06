import React, { useEffect, useState } from 'react'
import {Button} from '@mui/material';
import JsxParser from 'react-jsx-parser';
import { useParams } from 'react-router-dom';
const Viewer = () => {


  const { id }= useParams();
  const url = "http://localhost:5000";

  const [compData, setCompData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDataById = () => {
    setLoading(true);
    fetch(url+'/components/getbyid/'+id)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setLoading(false);
      setCompData(data);
    })
  }

  useEffect(() => {
    getDataById()
  }, [])
  

  const displayComponent = () => {
    if(!loading && compData){
      return (
        <div>
          <h1>{compData.title}</h1>
          {/* <h3>By {compData.uploadedBy.fname} {compData.uploadedBy.lname}</h3> */}
        <div className='card'>
          <div className="card-body">
          <JsxParser jsx={compData.code} />
          <br />
          
          <br />
          <br />
          </div>
          
          <div>

        </div>
          
          </div>
          
        </div>
        
      )
    }
  }

 return (
    <div className='viewer'>
        {displayComponent()}
        <div className='p-4 bg-light'>
          <h6 className='text-black' style={{fontFamily : 'monospace'}}>
            {compData ? compData.description : ''}
          </h6>
        </div>
        <Button  variant="contained" type="submit" color='primary' sx={{mt:5}}>Share Code</Button>
        <br />
        <br />
        <div className='p-4 bg-dark'>
          <h6 className='text-white' style={{fontFamily : 'monospace'}}>
            {compData ? compData.code : ''}
          </h6>
        </div>
    </div>
  )
}

export default Viewer