import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import { apiGet } from '../handler/apiData';

function ListItem() {
  let [files, setFiles] = useState([]);

  useEffect(() => {
    apiGet('Files').then(res => {
      setFiles(res.data);
    });
  }, []);

  const columns = [
    {
      field: 'Name',
      headerName: 'Name',
      width: 240,
      editable: true,
      renderCell: (params) => (
        <>
          <img className='list-icon' src={`https://icones.pro/wp-content/uploads/2021/06/icone-d-image-orange.png`} alt="avatar" />
          <p>{params.value}</p>
        </>
      )
    },
    {
      field: 'Owner',
      headerName: 'Owner',
      width: 100,
      editable: true,
      renderCell: (params) => (
        <Avatar src={params.value} alt="avatar" />
      )
    },
    {
      field: 'Label',
      headerName: 'Labels',
      width: 100,
      editable: true,
    },
    {
    field: 'Type',
    headerName: 'Type',
    width: 100,
    editable: true,
    },
    {
    field: 'ModifietAt',
    headerName: 'Modified',
    width: 200,
    type: Date,
    editable: true,
    },
    {
    field: 'action',
    headerName: 'Action',
    width: 150,
    editable: true,
    renderCell: (params) => (
      <>
        <DeleteOutlineIcon className='icon' />
        <DriveFileRenameOutlineIcon className='icon' />
      </>
    )
    },
    
  ];

  return (
    <div className='list-item-container'>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={files}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          style={{border: 0}}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          columns={columns}
        />
      </Box>
    </div>
  )
}

export default ListItem