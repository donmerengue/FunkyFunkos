import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, MailOutline } from "@mui/icons-material";
import { lightGreen } from "@mui/material/colors";

const Footer = () => {
  return (
    <BottomNavigation
        showLabels
        sx={{ color: lightGreen[50] }}
        /* value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }} */
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Contact" icon={<MailOutline />} />
      </BottomNavigation>
  )
}

export default Footer