import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Col1 from './collection1.png';
import Col3 from './collection3.png';
import Col2 from './collection2.png';
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
    <Box className="shopbyCollection">
        
         <Typography  sx={{ flexGrow: 3,  textAlign: 'left' }}  >
        <p className="shopTittleCollection">Shop by Collection</p>
        <p className="tptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Typography> 
     
      <Grid xs={12} container spacing={2}>
        <Grid item xs={12}  lg={4} sm={6}>
          <img src={Col1} className=""/>
          <Typography  sx={{ flexGrow: 3,  textAlign: 'left' }}  >
        <p className="crdTittle">HandCraft Collection</p>
        <p className="crdDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Typography> 
        </Grid>
        <Grid item xs={12}  lg={4} sm={6}>
        <img src={Col2} className=""/>
        <Typography  sx={{ flexGrow: 3,  textAlign: 'left' }}  >
        <p className="crdTittle">Organized Desk Collection</p>
        <p className="crdDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Typography> 
        </Grid>
        <Grid item xs={12}  lg={4} sm={6}>
        <img src={Col3} className=""  />
        <Typography  sx={{ flexGrow: 3,  textAlign: 'left' }}  >
        <p className="crdTittle">Focus Collection</p>
        <p className="crdDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Typography> 
        </Grid>
        
      </Grid>
    </Box>
  );
}