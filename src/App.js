import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import Definition from "./components/Definition";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/search/:word' element={<Definition />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
