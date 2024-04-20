import { Button } from "@mui/material";
import { ClientOnly } from "remix-utils/client-only";

export default function CSR() {
  return (
    <ClientOnly fallback={<SimplerStaticVersion />}>
      {() => <ComplexComponentNeedingBrowserEnvironment />}
    </ClientOnly>
  );
}

function ComplexComponentNeedingBrowserEnvironment() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Client-Side Rendering</h1>
      <p>
        This page was rendered on the client-side. This means that the page was
        not pre-rendered on the server and was instead rendered in the browser
        after the initial page load.
      </p>
      <p>
        This is useful for pages that need to be updated frequently or that
        contain dynamic content.
      </p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

function SimplerStaticVersion() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Client-Side Rendering</h1>
      <p>
        This page was rendered on the server-side. This means that the page was
        pre-rendered on the server and was sent to the browser as static HTML.
      </p>
      <p>
        This is useful for pages that do not need to be updated frequently or
        that contain static content.
      </p>
    </div>
  );
}
