import React from 'react'
import {TextField,Button} from '@mui/material'
const Forgetpassword = () => {
  return (
    <div className='forgetpasswordbackground'>
    <div >
        <form className='forgetpasswordform'>
        <div className='forgetpasswordtextfield'>   
        <h3 className='text-center' style={{color:'black'}}>Change Your Password</h3>
        <TextField sx={{mt:3}} fullWidth label="Email" />
        <TextField  sx={{mt:3}} fullWidth label="Mobile number"  />
        <TextField  sx={{mt:3}} fullWidth label=" New Password" type="password" />
        <Button  variant="contained" type="submit" color='secondary' sx={{mt:5}}>Change Password</Button>
        </div>
        
        </form>
    </div>
    </div>
  )
}

export default Forgetpassword