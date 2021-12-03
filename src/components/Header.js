
import  React, {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import logo from './logo.png';
import ClearIcon from '@mui/icons-material/Clear';
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./Header.css";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  return (
    <>
     <Toolbar className="topbarArea">
      <Typography edge="start"   sx={{ mr: 1 }}>
        {/* <MenuIcon /> */}
        <FormControl className="countrySelect">
  <NativeSelect
    defaultValue={10}
    inputProps={{
      name: 'country',
      
    }}
  >
    <option value={10}>CAD</option>
    <option value={20}>IND</option>
    <option value={30}>USA</option>
  </NativeSelect>
</FormControl>
      </Typography>
      <Typography sx={{ flexGrow: 1,  textAlign: 'right' }} edge="end">
        {/* {rightContent} */}
        <ul class="topnav">
          <li class="active" href="#Women">Sign in</li>
          <li href="#Men">Create an account</li>
      </ul>
      </Typography> 
    </Toolbar>
    <div className="header">
      
        <Grid item xs={6}  lg={6} sm={4} sx={{ textAlign: 'left' }}>
        <a href="/">
            <img src={logo} style={{width:45 }} />
          </a>
        </Grid>
        <Grid item xs={8}  lg={6} sm={8}>
        <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option mobile-option"> <Typography edge="start"   sx={{ mr: 1 }}>
        {/* <MenuIcon /> */}
        <FormControl className="countrySelect">
  <NativeSelect
    defaultValue={10}
    inputProps={{
      name: 'country',
      
    }}
  >
    <option value={10}>CAD</option>
    <option value={20}>IND</option>
    <option value={30}>USA</option>
  </NativeSelect>
</FormControl>
      </Typography></li>
    <li className="option"> <a class="active" href="#Women">Women</a></li>
        <li className="option"><a href="/">Men</a></li>
        <li className="option"><a href="/">Company</a></li>
        <li className="option"><a href="/">Stores</a></li>
        <li className="option mobile-option "> <a href="/">Sign in</a> </li>
          <li className="option mobile-option"><a href="/" className="sign-up">Create an account</a> </li>
          
    </ul>
        </Grid>
       
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <ClearIcon className="menu-icon" />
        ) : (
          <DehazeIcon className="menu-icon" />
        )}
      </div>
        </Grid>
     
      
    </div>
    </>
  );
};

export default Header;