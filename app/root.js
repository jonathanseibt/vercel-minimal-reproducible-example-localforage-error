import { Outlet } from "@remix-run/react";
import { withSentry } from "@sentry/remix";

function App() {
  return (
    <html>
      <body>
        <Outlet />
      </body>
    </html>
  );
}

export default withSentry(App);
