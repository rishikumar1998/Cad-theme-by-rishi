import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cate1 from './cata1.png';
import Cate3 from './cata3.png';
import Cate2 from './cata2.png';
import Cate4 from './cata4.png';
import Cate5 from './cata5.png';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box className="shopbycategoty">
        <Grid xs={12} container spacing={2} className="shopbycategotyTopTittle">
        <Grid item xs={12}  lg={6} sm={12} md={6} sx={{ textAlign: 'left' }}  className="shopTittle" >
           Shop by Category
        </Grid>
        <Grid item xs={12}  lg={6} sm={12} md={6} sx={{ textAlign: 'right' }}  className="browseCategory">
         Browse all categories <ArrowForwardIcon/>
        </Grid>
        </Grid>
     
      <Grid xs={12} container spacing={2}>
        <Grid item xs={12}  lg={3} sm={6}>
          <img src={Cate1} className=""/>
        </Grid>
        <Grid item xs={12}  lg={3} sm={6}>
        <img src={Cate2} className=""/>
        </Grid>
        <Grid item xs={12}  lg={3} sm={6}>
        <img src={Cate3} className=""/>
        </Grid>
        <Grid item xs={12}  lg={3} sm={6}>
        <img src={Cate4} className=""/>
        </Grid>
        {/* <Grid item xs={3} md={3}>
        <Item><img src={Cate1} className=""/></Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}