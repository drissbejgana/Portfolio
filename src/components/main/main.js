import react,{ Component, useContext } from "react"
import Skills from "./skills/skills"
import Contact from "./contact/contact"
import Home from "./home/home"
import About from "./about/about"
import './main.css'
import Work from "./work/work"
import { ThemContext } from "../../App"

export default function Main(){

const theme=useContext(ThemContext);

   return(
   <>
        <Home/>    
        <Skills/>
        <About/>
        <Work/>
        <Contact/>
        <a href="#haut" className="haut"><img id="img" src={theme.imgfly} /></a>

    </>
     );

}
