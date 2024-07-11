import * as React from 'react';
import logo from './logo.svg';
import { styled } from '@mui/material/styles';
import Test2 from './components/SongList.tsx'
import BasicList from './components/BasicList.tsx'
import {Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import { Box, Container, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import CommandBar from './components/CommandBar.tsx'
import Home from './Home.tsx'
import SearchBar from './components/SearchBar.tsx'
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <div className="App">
        <Box>
          <Grid container spacing={0}
          sx={{
            mt: '2px'
          }}
          >
              <Item sx={{ flexGrow: '6'}}>
                  <CommandBar/>
                  <BasicList/>
              </Item>
              <Item sx={{ flexGrow: '3'}}>
                <SearchBar/>
              </Item>
          </Grid>
        </Box>
    </div>
  );
}

export default App;