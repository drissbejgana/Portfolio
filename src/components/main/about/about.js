import React,{useContext, useEffect} from 'react';
import './about.css'
import driss from '../home/img/driss.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemContext } from "../../../App"
function About() {

     const theme=useContext(ThemContext)
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div className='spacebcontainer'>
        <a name="about"/>
         <h1 style={{color:theme.text}}>About Me</h1>
        <div className="about_container">
        <div data-aos="fade-right" className="myimg">
               <img src={"/"}></img> 
                <a target="_blank" href="https://www.canva.com/design/DAEtR-UrScs/C9R0gAWumapzclfI0oEoEw/view?utm_content=DAEtR-UrScs&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel">Resume</a>  
           </div>
            <div data-aos="fade-left" className="aboutme">
                  <h3 onClick={(e)=>{
                document.getElementById('intro').classList.toggle('display');
                document.getElementById('introdi').classList.toggle('rotate');


                  }} style={{color:theme.text}}>
                       <div className='rotate' id="introdi"></div>
                       01. Intoduction
                  </h3>

                  <p className='display h3' id="intro" style={{color:theme.text,lineHeight:'30px'}}>
                      Hello! My name is Driss and I enjoy creating things that live on the internet and I am a Full-Stack web developer. I can provide clean code and pixel perfect design. I also make the website more interactive with web animations
                  </p>
                  <h3 onClick={(e)=>{
                 document.getElementById('edu').classList.toggle('display');
                 document.getElementById('edudi').classList.toggle('rotate');
                  }}  style={{color:theme.text}}>
                       <div id="edudi"></div>
                       02. Education
                    </h3>
                  <div id='edu' className="education h3"> 
                       <p style={{color:theme.text}}>
                          <span>ISTA NTIC MARRAKECH </span>
                          Diploma in Computer Development Technology| Sep 2019 - Jul 2021
                       </p>
                       <p style={{color:theme.text}}>
                          <span>FSSM MARRAKECH </span>
                          Semlalia Faculty of Sciences of Marrakech |  2017 - 2019
                       </p >
                       <p style={{color:theme.text}}>
                          <span>LYCEE LAMZOUDIA</span>
                           Baccalauréat Science physique | Juil 2017
                       </p>
                  </div>
                  <h3 onClick={(e)=>{
                 document.getElementById('exp').classList.toggle('display');
                 document.getElementById('expdi').classList.toggle('rotate');
                  }}  style={{color:theme.text}}>
                       <div id="expdi"></div>
                       03. Experience
                    </h3>
                  <div id='exp' className="education h3">   
                    
                      <p style={{color:theme.text}}>
                            <span>Freelance</span>
                            Freelancing | Jul 2021
                       </p>                 
                       <p style={{color:theme.text}}>
                            <span>Web Developer (Stage)</span>
                            CIMAR (Ciments Du Maroc) | Mai 2021
                       </p>
                  </div>




            </div>
        </div>
        </div>
    );
}

export default About;
