import { Outlet } from "@remix-run/react";

export default function TestRoute() {
  return (
    <div>

      <h1>Nested</h1>
      <Outlet   />
    </div>
  );
}