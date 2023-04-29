import { useState, useEffect, Fragment } from "react";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Divider,
  CircularProgress,
  useTheme,
  Button,
} from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  // eslint-disable-next-line
  Bookmark as BookmarkedIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Definition = ({ bookmarks, addBookmark, removeBookmark }) => {
  const { word } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(true);
  const [audio, setAudio] = useState(null);

  const isBookmarked = Object.keys(bookmarks).includes(word);

  const updateState = (data) => {
    setDefinitions(data);
    setLoading(false);

    const phonetics = data[0].phonetics;
    console.log(phonetics);
    if (!phonetics.length) return;

    const url = phonetics[0].audio;
    setAudio(new Audio(url));
  };

  useEffect(() => {
    const fetchDefinitions = async () => {
      try {
        const resp = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        updateState(resp.data);
        console.log(resp.data);
      } catch (err) {
        setLoading(false);
        setExist(false);
      }
    };
    if (!isBookmarked) fetchDefinitions();
    else updateState(bookmarks[word]);
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          ...theme.mixins.alignInTheCenter,
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (!exist)
    return (
      <Box
        sx={{
          ...theme.mixins.alignInTheCenter,
        }}
      >
        <Typography>
          Sorry pal, we couldn't find definitions for the word you are looking
          for.
        </Typography>
        <Button
          variant='contained'
          sx={{
            textTransform: "capitalize",
            mt: "16px",
          }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    );

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <IconButton onClick={() => navigate(-1)}>
          <BackIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          onClick={() =>
            isBookmarked ? removeBookmark(word) : addBookmark(word, definitions)
          }
        >
          {isBookmarked ? (
            <BookmarkedIcon sx={{ color: "black" }} />
          ) : (
            <BookmarkIcon sx={{ color: "black" }} />
          )}
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
        {audio && (
          <IconButton
            onClick={() => audio.play()}
            sx={{
              borderRadius: "16px",
              p: "8px",
              color: "#fff",
              background: (theme) => theme.palette.pink,
            }}
          >
            <PlayIcon />
          </IconButton>
        )}
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
