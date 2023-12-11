import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    colors: {
        primary: '#c10100',
        secondary: '#FFFF00',
        background: '#f5f5f5',
        navBackground: '#000000',
        appBar: '#333333',
        // Add more theme variables as needed
      },
      fonts: {
        main: '"Nunito", sans-serif !important',
        
      },
      breakpoints : {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
          
        },
      },
    

  });
  
  export default theme;
  