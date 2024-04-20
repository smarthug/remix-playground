import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  
} from "@remix-run/react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { withEmotionCache } from "@emotion/react";
import { useContext } from "react";
import { ClientStyleContext } from "./contexts";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";

const Document = withEmotionCache(({ children, title }, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEnhancedEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      emotionCache.sheet._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
});

export default function App() {
  return (
    <Document title="Remix App">
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <Outlet />
      {/* </ThemeProvider> */}
    </Document>
  );
}
