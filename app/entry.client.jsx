/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientStyleCacheProvider } from "./contexts";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientStyleCacheProvider>
        <CssBaseline />
        <RemixBrowser />
      </ClientStyleCacheProvider>
    </StrictMode>
  );
});
