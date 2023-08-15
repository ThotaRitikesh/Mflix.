import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useState,useContext } from 'react';
import axios from "axios";
import { movieContext } from "../utiles/context"
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
    const [text, setText] = useState("");

    const{setMovie,setErrorMessage}=useContext(movieContext)

    const changeText = (event) => {
        setText(event.target.value);
        if (event.target.value.length === 0) {
          axios
          .get(`https://www.omdbapi.com/?s=king&apikey=4efa7c6`)
          .then((response) => {
            setMovie(response.data.Search);
          });
        }
    };
    

    const getMovie = (e) => {
      if (text.length === 0) {
        alert("Please Enter Movie Name..!");
        e.preventDefault();
      } else {
        e.preventDefault();
        axios
          .get(`https://www.omdbapi.com/?s=${text}&apikey=4efa7c6`)
          .then((response) => {
            setMovie(response.data.Search);
            setErrorMessage(response.data.Error);
            setText("");
          });
      }
    };

    const {id}=useParams();

    // const handleKeyPress = (event) => {
    //   console.log('KeyPress event triggered');
    //   if (event.key === 'Enter') {
    //     getMovie();
    //   }
    // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" style={{boxShadow:"0 0 15px gray"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link style={{ textDecoration: 'none' , color:"crimson"  }}
              to="/">
            MFLIX
            </Link>
          </Typography>
     { id===undefined &&
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter Movies…"
              inputProps={{ 'aria-label': 'search' }}
              value={text}
              onChange={changeText}
              autoFocus
              variant="outlined"
              // onKeyPress={handleKeyPress}

            />
            <Button onClick={getMovie} color='inherit' variant='text' >Search</Button>
          </Search>
}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;