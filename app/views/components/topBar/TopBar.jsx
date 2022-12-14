import React from 'react';
import { Link, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './TopBar.css';

class TopBar extends React.Component {
	render() {
		return (
			<AppBar position="static">
        		<Toolbar className="cse4050-toolbar">
          			<Typography variant="h6" className="cse4050-logo">
           				Alex's Super Cool Application
          			</Typography>
          				<Stack
						direction="row"
						spacing={2}
						sx={{ '& a.active': {color:theme=>theme.palette.primary.contrastText, bgcolor:theme=>theme.palette.primary.main, } }}
						>
						<nav>
						{<><Button variant="contained">
						<NavLink style={{textDecoration: 'none'}} to="/">
							Home
						</NavLink>
						</Button>
					<Button variant="outlined">
					<NavLink style={{textDecoration: 'none'}} to="/tasks">
					Tasks
				</NavLink>
				</Button></>}
				</nav>
			</Stack>
        </Toolbar>
      </AppBar>
		);
	}
}
export default TopBar;
