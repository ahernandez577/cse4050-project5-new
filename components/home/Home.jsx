import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class Home extends React.Component {
  render() {
    return (
      <Container fixed>
        <Typography variant="h1" align="center" classname=".cse4050-homepage">
        Welcome to the CSE 4050 Project!
        </Typography>
      </Container>
    );
  }
}

export default Home;
