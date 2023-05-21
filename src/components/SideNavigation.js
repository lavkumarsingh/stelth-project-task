import * as React from 'react';
import { Menu, MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
// css styles
import '../styles/dashboard.css';

function SideNavigation() {
  return (
    <div className='side-nav-container'>
        <span className='logo-container'>
          <img className="logo-icon" src='assets/logo.jpg' alt='' />
          <h4 className="logo-text">Stealth</h4>
        </span>
        <ul className='menu'>
          <li className='menu-item'>
            {/* <Menu menuName={" File Manager"} menuIcon={""} /> */}
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <DashboardIcon className='menu-icon' fontSize="medium" />
                </ListItemIcon>
                <ListItemText>File Manager</ListItemText>
              </MenuItem>
            </MenuList>
          </li>
        </ul>
    </div>
  )
}

export default SideNavigation