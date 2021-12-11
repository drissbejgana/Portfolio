import react,{useContext,useEffect} from "react"
import  './home.css'
import programming from './img/programming.svg'
import facebook from './img/facebook.png'
import linkedin from './img/linkedin.png'
import gmail from './img/google-plus.png'
import github from './img/github.png'
import instagram from './img/instagram.png'
import { ThemContext } from "../../../App"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  const theme=useContext(ThemContext)
  console.log(theme)
     return(
   <div data-aos="zoom-in">
          <a name="home"/>
        <div className="containe">
           <h2 style={{color:theme.text}} className="whoim">
            <div > Hello There <span>.</span></div>Im <span>Bejgana Driss</span> Im Full Stack Devoloper<br/>
            Using PHP/REACT JS
           </h2>
           <img className="programming" src={programming}  />
           <div className="contactme">
       <a className="buttton" href='#contact'>Contact Me</a>
       <div className="logo">
        <a href="https://www.facebook.com/profile.php?id=100008464683710" target="_blank" ><img src={facebook} alt="facebook" /></a>
        <a href="https://www.linkedin.com/in/driss-bejgana-0690b2200" target="_blank" ><img src={linkedin} alt="telegram" /></a>
        <a href="https://www.gmail.com" target="_blank" ><img src={gmail}    alt="gmail"/></a> 
        <a href="https://www.github.com/drissbejgana"  target="_blank" ><img src={github}  alt="github"/></a>
        <a href="https://www.instagram.com/idrissbejganna/" target="_blank" >  <img src={instagram} alt="instgram"/></a>
       </div>
        </div>
        </div>
    </div>

     );

}

