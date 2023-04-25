import { Stack, Typography, Box, IconButton } from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  Border as BookmarkedIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";

import { useParams } from "react-router-dom";

const Definition = () => {
  const { word } = useParams();
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <IconButton>
          <BackIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          mt: "24px",
          background:
            "linear-gradient(90.17deg, #191e5d 0.14%, #0f133a 98.58%)",
          boxShadow: "0px 10px 20px rgba(19, 23, 71, 0.25)",
          px: "32px",
          py: "40px",
          color: "white",
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
          }}
          variant='h5'
        >
          {word}
        </Typography>
        <IconButton
          sx={{
            borderRadius: "16px",
            p: "8px",
            color: "#fff",
            background: (theme) => theme.palette.pink,
          }}
        >
          <PlayIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default Definition;
