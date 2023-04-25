import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import Definition from "./components/Definition";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sx={{ p: "16px" }}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/bookmarks' element={<Bookmarks />} />
              <Route path='/search/:word' element={<Definition />} />
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
