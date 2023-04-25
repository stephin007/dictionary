import { useState } from "react";
import {
  Box,
  Typography,
  FilledInput,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(" ").length > 1) return;
    navigate(`/search/${trimmedWord}`);
  };

  return (
    <div>
      <Box
        sx={{
          ...theme.mixins.alignInTheCenter,
        }}
      >
        <img src='/assets/book.png' alt='book' />
        <Typography
          color='primary'
          sx={{
            mt: "20px",
            mb: "8px",
          }}
          variant='h4'
        >
          Dictionary
        </Typography>
        <Typography color='GrayText'>
          Find meanings and save for quick reference
        </Typography>
        <Box
          sx={{
            width: "360px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <FilledInput
              value={word}
              onChange={(e) => setWord(e.target.value)}
              sx={{
                my: "32px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                "& .MuiFilledInput-input": {
                  p: "16px",
                },
              }}
              startAdornment={<SearchIcon color='disabled' />}
              fullWidth
              disableUnderline
              placeholder='Search Word'
            />
          </form>
        </Box>

        <IconButton
          to='/bookmarks'
          component={Link}
          sx={{
            borderRadius: "16px",
            p: "16px",
            color: "#fff",
            background: (theme) => theme.palette.pink,
            boxShadow: "0px 10px 10px rgba(221, 114, 133, 0.2)",
          }}
        >
          <BookmarkIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Home;
