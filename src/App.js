import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Images from "./components/ImageComponent/Images";
import FarmerConsumer from "./components/BulletPoints/FarmerConsumer";
import ForFarmer from "./components/SignUP/ForFarmer";
import ForConsumer from "./components/SignUP/ForConsumer";
import  Button  from './components/BulletPoints/Button';
import MobileNav from "./components/Navigation/MobileNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <MobileNav/> */}
        <Switch>
          <Route exat path="/farmersignup">
            <ForFarmer />
          </Route>
          <Route exat path="/consumersignup">
            <ForConsumer />
          </Route>
          <Route exat path="/">
            <Images/>
            <FarmerConsumer />
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
