import './header.css';
import React, {useContext } from 'react';
import {ThemContext} from '../../App'

export default function Header({mode,func}){
    const theme=useContext(ThemContext)
    return(
        <div style={{backgroundColor:theme.body,boxShadow:theme.boxshadow}} className="container">
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
                <div onClick={
                         ()=>{
                            document.querySelector(".nav-bar").classList.toggle('trans')
                            document.getElementById("row1").classList.toggle('rows1')
                            document.getElementById("row2").classList.toggle('rows2')
                            document.getElementById("row3").classList.toggle('rows3')
                         }
                } className="burger">
                    <div style={{backgroundColor:theme.text}} id="row1" className="scrollb" ></div>
                    <div style={{backgroundColor:theme.text}} id="row2" className="scrollb"></div>
                    <div style={{backgroundColor:theme.text}} id="row3" className="scrollb"></div>
                 </div>
          </div>               

);
   }
