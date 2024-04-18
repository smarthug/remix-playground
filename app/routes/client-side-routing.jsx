import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "@remix-run/react";
// import { redirect } from "@remix-run/cloudflare";

// export function loader(){
//     return redirect("/csr");
// }

export default function ClientSideRouting() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("This is a client-side route");
    // navigate("/csr");
  }, []);

  return (
    <div>
      <h1>Client Side Routing</h1>
      <button onClick={() => navigate("/csr")}>Go to CSR</button>
      <p>
        This page was rendered on the client-side. This means that the page was
        not pre-rendered on the server and was instead rendered in the browser
        after the initial page load.
      </p>
      <p>
        This is useful for pages that need to be updated frequently or that
        contain dynamic content.
      </p>
    </div>
  );
}
