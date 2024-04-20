import { createTheme, colors } from "@mui/material";

export const breakpointsValues = {
  xs: 0,
  sm: 672,
  md: 1214,
  lg: 1312,
  xl: 1584,
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FB634E",
    },
    secondary: {
      main: "#17A3EE",
    },
    error: {
      main: colors.red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "Inter",
      "NanumSquareNeo",
      "Arial",
      "sans-serif",
    ].join(","),
    htmlFontSize: 16,
    // button1: {
    //   fontSize: "0.75rem",
    //   lineHeight: "1rem",
    //   fontWeight: 400,
    //   letterSpacing: 0.32,
    // },
    // button2: {
    //   fontSize: "0.875rem",
    //   lineHeight: "1.125rem",
    //   fontWeight: 500,
    //   letterSpacing: 0.32,
    // },
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableTouchRipple: true },
    },
    MuiButton: {
      defaultProps: {
        // disableFocusRipple: true,
        disableElevation: true,
        // disableRipple: true,
        disableFocusRipple: true,
        // disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "23px",
          fontFamily: "Noto Sans KR",
          textTransform: "none",
          color: "#ffffff",
        },
        contained: {
          border: "none",
        },
        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          [`&:hover`]: {
            backgroundColor: theme.palette.primary.main,
          },
        }),
        containedSecondary: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          [`&:hover`]: {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
        // outlined: ({ theme }) => ({
        //   border: `1px solid ${theme.palette.custom.button[20]}`,
        //   backgroundColor: "transparent",
        //   [`&:hover`]: {
        //     backgroundColor: "#471727",
        //     border: `1px solid ${theme.palette.custom.button[21]}`,
        //     color: theme.palette.custom.text[40],
        //   },
        //   [`&:active`]: {
        //     color: theme.palette.custom.text[40],
        //     border: `1px solid ${theme.palette.custom.button[21]}`,
        //   },
        // }),
        text: {
          border: "none",
          backgroundColor: "transparent",
          [`&:hover`]: { backgroundColor: "transparent" },
        },
        sizeLargest: ({ theme }) => ({
          borderRadius: "10px",
          padding: theme.spacing(1.75, 3),
        }),
        sizeLarge: ({ theme }) => ({
          borderRadius: "8px",
          padding: theme.spacing(1.25, 2.5),
        }),
        sizeMedium: ({ theme }) => ({
          borderRadius: "6px",
          padding: theme.spacing(1, 2),
        }),
        sizeSmall: ({ theme }) => ({
          borderRadius: "6px",
          padding: theme.spacing(0.5, 1.5),
        }),
      },
    },
  },
  breakpoints: {
    values: breakpointsValues,
  },
});

export default theme;
