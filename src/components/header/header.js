import './header.css';
import React, {useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {ThemContext} from '../../App'

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header({mode,func}){

          useEffect(()=>{
            AOS.init({
                duration : 2000
              });
            let burger=document.querySelector(".burger")
            ,nav_lis=document.querySelector(".nav-bar");
            burger.addEventListener("click",function(){
            let row1=document.getElementById("row1")
            let row2=document.getElementById("row2")
            let row3=document.getElementById("row3")
                nav_lis.classList.toggle('trans');
                row1.classList.toggle('rows1')
                row2.classList.toggle('rows2')
                row3.classList.toggle('rows3')
            })
          },[])

    const theme=useContext(ThemContext)
    return(
        <div data-aos="fade-in"style={{backgroundColor:theme.body,boxShadow:theme.boxshadow}} className="container">
             <h2  style={{color:theme.text}} >Portfolio.</h2>
             <ul style={{backgroundColor:theme.body}}  className="nav-bar">
                 <li><a style={{color:theme.text}}  href="#home" >Home</a></li>
                 <li><a style={{color:theme.text}}  href="#skills" >Skills</a></li>
                 <li><a style={{color:theme.text}}  href="#work">Work</a></li>
                 <li><a style={{color:theme.text}}  href="#about">About</a></li>
                 <li><a style={{color:theme.text}}  href="#contact">Contact</a></li>
             </ul>
                <div className="img">
                    <img onClick={()=>func()}  src={mode} alt="" />
                </div>
                <div className="burger">
                    <div style={{backgroundColor:theme.text}} id="row1" className="scrollb" ></div>
                    <div style={{backgroundColor:theme.text}} id="row2" className="scrollb"></div>
                    <div style={{backgroundColor:theme.text}} id="row3" className="scrollb"></div>
                 </div>
          </div>               

);
   }