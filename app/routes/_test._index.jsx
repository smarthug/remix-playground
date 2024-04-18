import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Playground</h1>
      <ul>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/csr">Client-Side Rendering</Link>
        </li>
        <li>
          <Link to="/client-side-routing">client side routing</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
    </div>
  );
}
