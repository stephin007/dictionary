import { Box, Typography, FilledInput, IconButton } from "@mui/material";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
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
          <FilledInput
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
        </Box>

        <IconButton
          sx={{
            borderRadius: "16px",
            p: "16px",
            color: "#fff",
            background:
              "linear-gradient(138.72deg, #DC8295 0%, #DC687C 95.83%)",
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
