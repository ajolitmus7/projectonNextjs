import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import style from "../searchBar/SearchBar.module.scss";
const SearchBar = ({ setSearchQuery }: any) => {
  return (
    <Box>
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "grey" }} />
      </IconButton>
      <TextField
        id="search-bar"
        className={style.text}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </Box>
  );
};

export default SearchBar;
