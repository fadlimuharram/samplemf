import React from "react";
import { Button, createTheme, ThemeProvider } from "@material-ui/core";

React.versionCheck = "set by host";
console.log("React.versionCheck 1", React.versionCheck);

const RemoteButton = React.lazy(() => import("app2/Button"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00"
    }
  }
});
const App = () => (
  <ThemeProvider theme={theme}>
    <h2>App 1</h2>
    <Button variant="contained" color="primary">
      Material 4
    </Button>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </ThemeProvider>
);

export default App;
