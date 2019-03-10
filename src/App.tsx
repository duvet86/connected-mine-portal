import React, { SFC } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import configureTheme from "lib/configureTheme";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const theme = configureTheme();

const App: SFC = () => (
  <MuiThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </MuiThemeProvider>
);

export default App;
