import { Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();

    setInputValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, refine]);

  useEffect(() => {
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Box
      className="ais-SearchBox"
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Box
        component="form"
        className="ais-SearchBox-form"
        noValidate
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 1, md: 2 },
          width: "80%",
        }}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <TextField
         size="small"
         label="Search"
         sx={{
          width: "80%",
        }}
         variant="outlined"
         InputProps={{
           endAdornment: (
             <InputAdornment position="end">
               <SearchIcon color="primary" />
             </InputAdornment>
           ),
         }}
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          maxLength={512}
          type="search"
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
      </Box>
    </Box>
  );
}
