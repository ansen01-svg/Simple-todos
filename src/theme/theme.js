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
  },
});


export default theme;