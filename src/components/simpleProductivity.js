import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <div className="section-padding">
    <Box sx={{ width: 1 }}>
      <Grid xs={12} spacing={2}>
        <Grid item xs={12}>
          <Item>
          <div className="hero-image2">
  <div className="hero-text">
    <h1>Simple Productivity</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec rutrum justo. Etiam vestibulum vulputate justo .</p>
    <button>Shop Focus</button>
    </div>
  </div></Item>
  </Grid>
        </Grid>
      </Box>
    </div>
  );
}