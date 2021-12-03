import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerSlider from './components/Homebanner';
import Container from '@mui/material/Container';
import ShopbyCategory from './components/shopBycategory'
import Levelup from './components/levelUp'
import ShopbyCollection from './components/shopBycollection'
import SimpleProductivity from './components/simpleProductivity'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
     
      <Header/>
      <BannerSlider/>
      <ShopbyCategory/>
      <Levelup/>
      <ShopbyCollection/>
      <SimpleProductivity/>
      <Footer/>
    </div>
  );
}

export default App;

