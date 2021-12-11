import react,{useContext, useEffect,useState} from "react"
import  './skills.css'
import Developer_activity from '../home/img/undraw_version_control_re_mg66.svg'

import asp from '../home/img/asp.png'
import css from '../home/img/css.png'
import js from '../home/img/js.png'
import php from '../home/img/php.png'
import html from '../home/img/html-5.png'
import csharp from '../home/img/hashtag.png'
import physics from '../home/img/physics.png'
import database from '../home/img/database.png'

import { ThemContext } from "../../../App"
import Progerssfront from './progerssfront';
import Progerssback from './progerssback';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills(){
   const theme=useContext(ThemContext)
   useEffect(()=>{
      AOS.init({
         duration : 2000
       });
   },[])
     return(           
        <div className="spacebcontainer">
              <a name="skills"/>
              <h1 style={{textAlign:"center",color:theme.text,marginBottom:"60px"}}>What's I do </h1>
            <div className="skills">
               <img id="r" data-aos="fade-right" src={Developer_activity} alt="dev_act" />
             <div id="l" data-aos="fade-left">
                <div className="skillsimg">
                <img src={asp}  alt="" />
                <img src={php}  alt="" />
                <img src={html}  alt="" />
                <img src={css}  alt="" />
                </div>
              <div className="skillsimg">
                <img src={js}  alt="" />
                <img src={csharp}  alt="" />
                <img src={physics}  alt="" /> 
                <img src={database}  alt="" /> 
              </div>

                  <ul className="ul">
                   <li style={{color:theme.text}}>Managed complex projects from start to finish</li>
                   <li style={{color:theme.text}}>Collaborated with other designers </li>
                   <li style={{color:theme.text}}>Translated requirements into polished, high-level designs</li>
                   <li style={{color:theme.text}}>Creation of databases.</li>
                  </ul>
             </div> 
         </div>
        <div className="progress">
          <div>
            <h3 style={{textAlign:"center",color:theme.text}}>Front End</h3>
             <Progerssfront />    
          </div>
          <div>
          <h3 style={{textAlign:"center",color:theme.text}}>Back End</h3>
            <Progerssback/>
          </div>
        </div> 
        </div>
     );

}
