import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
      `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h4: 'h1',
          // h2: 'h2',
          // h3: 'h2',
          // h4: 'h2',
          // h5: 'h2',
          // h6: 'h2',
          // subtitle1: 'h2',
          // subtitle2: 'h2',
          // body1: 'span',
          // body2: 'span',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            '& fieldset': {            // - The <fieldset> inside the Input-root
                borderColor: 'rgb(54, 51, 51)',   // - Set the Input border
            },
            // '&:hover fieldset': {
            //   borderColor: 'pink',
            // },
            // '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
            //   borderColor: 'green',
            // },
          }
        }
      }
    }
  },
});


export default theme;