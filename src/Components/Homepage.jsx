import React from "react";
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageUpload from "./ImageUpload";
import ImageUploader from "./ImageUploader";


const theme = createTheme();

function Homepage() {

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>

            {/* Intro */}
            <section>
                <div style={{ padding: "24px 24px 24px 24px", textAlign: "center"}}>
                    <h1>Sortation</h1>
                    <p>Upload your images and get them sorted!</p>
                </div>
            </section>

            {/* image upload */}
            <section>
                <ImageUpload/>
            </section>


   
        </Container>
      </ThemeProvider>

    )
}

export default Homepage