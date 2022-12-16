import React from "react";
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageUpload from "./ImageUpload";



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Sortation
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

function Homepage() {

    return (

        <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Sortation
            </Typography>
          </Toolbar>
        </AppBar>

        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 10 }}>

        <div style={{ padding: "24px 24px 24px 24px", textAlign: "center"}}>
            <h1>Upload Your image</h1>
            {/* <p>Voeg hier nieuwe declaraties toe en bekijk je ingediende declaraties.</p> */}
        
            <div className='cardrow'>
                <ImageUpload/>
    
           </div>
        </div>
        
          {/* <Copyright /> */}
        </Container>
      </ThemeProvider>

    )
}

export default Homepage