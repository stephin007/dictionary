import { Stack, IconButton, Typography, Box } from "@mui/material";
import { ArrowBack as BackIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <Stack sx={{ mb: "16px" }} direction='row' alignItems='center'>
        <IconButton
          to='/'
          component={Link}
          sx={{
            color: "black",
            mr: "8px",
          }}
        >
          <BackIcon />
        </IconButton>
        <Typography variant='h6'>Bookmarks</Typography>
      </Stack>
      {!!Object.keys(bookmarks).length ? (
        Object.keys(bookmarks).map((b) => (
          <Box
            key={b}
            to={`/search/${b}`}
            component={Link}
            sx={{
              p: "16px",
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: "8px",
              textTransform: "capitalize",
              fontWeight: 800,
              mb: "16px",
              display: "block",
              color: "black",
              textDecoration: "none",
            }}
          >
            {b}
          </Box>
        ))
      ) : (
        <Typography sx={{ mt: "40px" }} align='center'>
          No Bookmarks
        </Typography>
      )}
    </>
  );
};

export default Bookmarks;
