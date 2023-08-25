import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000"
    }
  }
});

console.log("React.versionCheck 2", React.versionCheck);

const MuiButton = () => (
  <ThemeProvider theme={theme}>
    <Button color="primary" variant="contained">
      Material 5
    </Button>
  </ThemeProvider>
);

export default MuiButton;
