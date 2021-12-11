import react,{ Component } from "react"
import Skills from "./skills/skills"
import Contact from "./contact/contact"
import Home from "./home/home"
import About from "./about/about"
import './main.css'
import Work from "./work/work"

export default class Main extends Component{


render(){

   const {fly} = this.props;
   return(
   <div>
        <Home/>    
        <Skills/>
        <About/>
        <Work/>
        <Contact/>
        <a href="#haut" className="haut"><img id="img" src={fly} /></a>

    </div>
     );

}

}