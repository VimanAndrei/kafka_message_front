import {AppBar, Toolbar, Typography, styled} from '@mui/material'
import { NavLink } from 'react-router-dom'

const Heder = styled(AppBar)`
background-color: black;
`
const HederTabs = styled(Typography)`
font-size: 18px;
margin: 10px;
`

const HederLinks = styled(NavLink)`
color: white;
textDecoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
}
`

function NavBar(name) {
  return (
    <div>
        <Heder position='static'>
        <HederTabs>Hello,{" " + window.sessionStorage.getItem("username") + " "}!</HederTabs>
            <Toolbar>
              <HederTabs><HederLinks to='/'>Logout</HederLinks></HederTabs>
              <HederTabs><HederLinks to='/addGroup'>Add Group</HederLinks></HederTabs>
            </Toolbar> 
        </Heder>
        
    </div>
  )
}

export default NavBar