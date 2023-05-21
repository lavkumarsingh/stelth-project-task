import React, { useEffect, useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl } from '@mui/material';

import {apiGet} from '../handler/apiData';

function Category(props) {
  let [category, setCategory] = useState([]);

  useEffect(() => {
    apiGet('Category').then(data => {
      setCategory(data);
    });
  }, []);

  return (
    <div className='category-container'>
      {
        category?.data?.map(e => {
          return(
            <div className='category-section'>
              <p>{e.Name}</p>
              {
                e.Labels.map(l=> {
                  return(
                    <div className='label-section'>
                      <FormControl>
                        <FormControlLabel control={
                        <Checkbox 
                        sx={{
                          color: "#814ee7",
                          '&.Mui-checked': {
                            color: "#814ee7",
                          },
                        }}
                        />
                        } label={l.Name} />
                      </FormControl>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Category