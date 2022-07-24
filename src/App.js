import './App.css';
import PreNavBar from './component/PreNavBar';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./component/Offers.js"
import Heading from "./component/Heading.js"
import StarProducts from "./component/StarProducts.js"
import HotAccessoriesMenu from "./component/HotAccessoriesMenu.js"
import HotAccessories from './component/HotAccessories.js';
import ProductReviews from './component/ProductReviews.js';
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import NavOptions from './component/NavOptions.js'

function App() {
  return (
    <Router>
      
      
      <PreNavBar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones}  tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers Offer={data.offer}/>
      <Heading text = "Star Products"/>
      <StarProducts starProduct = {data.starProduct}/>
      <Heading text = "Hot Accessories"/>
      <HotAccessoriesMenu />
      
      
      
    
      <Route exact path="/music">
        <HotAccessories music = {data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>

        </Route>
      
        <Route exact path="/smartDevice">
        <HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>

        </Route>



        <Route exact path="/home">
        <HotAccessories home = {data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>

        </Route>
      

        <Route exact path="/lifestyle">
        <HotAccessories lifestyle = {data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>

        </Route>
      

        <Route exact path="/mobileAccessories">
        <HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>

        </Route>


        <Heading text = "Product Reviews"/>



        <ProductReviews productReviews={data.productReviews}/>

        <Heading text = "Videos"/>



        <Videos videos= {data.videos}/>

        <Heading text = "In the Press"/>

        <Banner banner={data.banner}/>

        <Footer footer={data.footer}/>






      
      


      
     
      
    </Router>

  );
}

export default App;
