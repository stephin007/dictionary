import { useState, useEffect, Fragment } from "react";
import { Stack, Typography, Box, IconButton, Divider } from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  Border as BookmarkedIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Definition = () => {
  const { word } = useParams();
  const navigate = useNavigate();

  const [definitions, setDefinitions] = useState([]);

  useEffect(() => {
    const fetchDefinitions = async () => {
      const resp = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinitions(resp.data);
    };

    fetchDefinitions();
  }, []);

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <IconButton onClick={() => navigate(-1)}>
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

      {definitions.map((def, index) => (
        <Fragment key={index}>
          <Divider
            sx={{
              display: index === 0 ? "none" : "block",
              my: "24px",
            }}
          />
          {def.meanings.map((meaning) => (
            <Box
              key={meaning.partOfSpeech}
              sx={{
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#fff",
                p: "16px",
                borderRadius: "16px",
                mt: "40px",
              }}
            >
              <Typography
                sx={{ textTransform: "capitalize" }}
                color='GrayText'
                variant='subtitle1'
              >
                {meaning.partOfSpeech}
              </Typography>
              {meaning.definitions.map((definition, index) => (
                <Typography
                  key={definition.definition}
                  sx={{ my: "8px" }}
                  color='GrayText'
                  variant='body2'
                >
                  {meaning.definitions.length > 1 && `${index + 1}.`}
                  {definition.definition}
                </Typography>
              ))}
            </Box>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default Definition;
