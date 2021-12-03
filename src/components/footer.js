import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ColumnsGrid() {
  // form submit data
const [inputField , setInputField] = useState({
  email: '',
})

const inputsHandler = (e) =>{
  setInputField( {[e.target.name]: e.target.value} )
}

const submitButton = (event) =>{      

console.log("Email: " , inputField.email)  
}
  return (
    <Box className="footerbar">
        <Grid container spacing={2}>
        <Grid item xs={12}  sm={4} lg={2}>
          <Item className="footerGrid" sx={{ textAlign: 'left' }}>
          <ul>
                 <li className="footerTitle">Shop</li>
                 <li><a href="/">Bag</a></li>
                 <li><a href="/">Tees</a></li>
                 <li><a href="/">Objects</a></li>
                 <li><a href="/">Hoome Goods</a></li>
                 <li><a href="/">Accessories</a></li>
             </ul>
              </Item>
        </Grid>
        <Grid item xs={12}  sm={4} lg={2}>
        <Item className="footerGrid" sx={{ textAlign: 'left' }}>
        <ul>
                 <li className="footerTitle">Company</li>
                 <li><a href="/">Who we are</a></li>
                 <li><a href="/">Sustainability</a></li>
                 <li><a href="/">Press</a></li>
                 <li><a href="/">Careers</a></li>
                 <li><a href="/">Term & Condition</a></li>
                 <li><a href="/">Privacy</a></li>
             </ul>
              </Item>
        </Grid>
        <Grid item xs={12}  sm={4} lg={2}>
        <Item className="footerGrid" sx={{ textAlign: 'left' }}>
        <ul>
                 <li className="footerTitle">Account</li>
                 <li><a href="/">Manage Account</a></li>
                 <li><a href="/">Return & Exchanges</a></li>
                 <li><a href="/">Redeem a Gift Card</a></li>
             </ul>
              </Item>
        </Grid>
        <Grid item xs={12}  sm={4} lg={2}>
        <Item className="footerGrid" sx={{ textAlign: 'left' }}>
              <ul>
                 <li className="footerTitle">Connect</li>
                 <li><a href="/">Contact Us</a></li>
                 <li><a href="/">Twitter</a></li>
                 <li><a href="/">Instagram</a></li>
                 <li><a href="/">Pinterest</a></li>
             </ul>
              </Item>
        </Grid>
        <Grid item xs={12}  sm={6} lg={4} >
        <Item className="footerGrid" sx={{ textAlign: 'left' }}>
             <ul>
                 <li className="footerTitle">Sign up for our newsletter</li>
                 <li>The latest deals and savings, sent to your inbox weekly.</li>
                 <li> 
                   {/* <FormControl>
                        <TextField type="Email" id="filled-hidden-label-small" size="small" className="footerTextfield" 
                         name="email" 
                         onChange={inputsHandler} 
                         value={inputField.email} required/>
                   </FormControl>
                     <FormControl>
                        <Button type='submit' className="newsLetterBtn" onClick={submitButton} >Sign up</Button>
                      </FormControl> */}
                      <Grid xs={12} container spacing={2}>
        <Grid item xs={12}  lg={8} sm={6}>
        <FormControl>
                        <TextField type="Email" id="filled-hidden-label-small" size="small" className="footerTextfield" 
                         name="email" 
                         onChange={inputsHandler} 
                         value={inputField.email} required/>
                   </FormControl>
        </Grid>
        <Grid item xs={12}  lg={4} sm={6}>
        <FormControl>
                        <Button type='submit' className="newsLetterBtn" onClick={submitButton} >Sign up</Button>
                      </FormControl> 
        </Grid>
       
      </Grid>
                      </li>
                </ul>
              </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={12}  md={12} textAlign="left">
        <Item className="copyrightFooter">
          <hr/>
          <p className="copyrightContent">Copyright &copy; 2021 Clothing Company Inc.</p></Item>
      </Grid>
      </Grid>
    </Box>
  );
}