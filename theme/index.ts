import { createTheme } from '@mui/material/styles';
import { blueGrey, teal } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: blueGrey[500]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          maxWidth: '100vw',
          width: '100%',
          boxSizing: 'border-box',
          margin: '0',
          padding: '0'
        },
        body: {
          fontFamily: '"Kanit", sans-serif;',
          color: `${blueGrey[800]} !important`,
          overflowX: 'hidden'
        },
        a: {
          textDecoration: 'none !important',
          color: blueGrey[700]
        }
      }
    }
  }
});
