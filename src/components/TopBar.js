import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 600,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#814ee7',
  borderColor: '#814ee7',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#814ee7',
    borderColor: '#814ee7',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#814ee7',
    borderColor: '#814ee7',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function TopBar() {
  return (
    <div className='topBar-container'>
        <h1 className='heading-primary'>File Manager</h1>
        {/* <ColorButton variant="contained" startIcon={<AddIcon />}>Upload</ColorButton> */}
        <CustomButton variant="contained" startIcon={<AddIcon />} disableRipple>
         Upload
      </CustomButton>
    </div>
  )
}

export default TopBar