import React from 'react'
import SideNavigation from '../../components/SideNavigation'
import TopBar from '../../components/TopBar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchInput from '../../components/searchInput'
import ListItem from '../../components/ListItem'
import Category from '../../components/Category';


function Dashboard() {  
  return (
    <div className='dashboard-container'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideNavigation />
        </Grid>
        <Grid item xs={10} style={{backgroundColor: '#f0f3fc'}}>
          <Grid item xs={12} style={{backgroundColor: '#ffffff'}}>
            <TopBar />
          </Grid>
          <Grid item xs={12}>
            <div className='search-bar'>
              <SearchInput />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className='file-manager-container'>
                <section className='category'>
                  <h5 className='heading-secondary iconStyle'>Category <SettingsIcon /></h5>
                    <Category />
                </section>
                <section className='list-items'>
                  <h5 className='heading-secondary iconStyle' style={{marginLeft: 10}}>All Items</h5>
                  <ListItem />
                </section>
            </div>
          </Grid>
          
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Dashboard