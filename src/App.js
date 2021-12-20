import './App.css';
import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from './components/footer/footer'
import React,{useState,useEffect} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { darkTheme,lightTheme } from './theme';
import dark from  './img/moon.png' 

export const ThemContext=React.createContext()
function App() {
        
        const [theme,settheme]=useState(darkTheme)
        const [loading, setLoading] = useState(true);
        useEffect(()=>{
          setLoading(true)
          setTimeout(() => {
          setLoading(false) 
          let c=0;
          document.onscroll=()=>{
             const header=document.querySelector('.container');
              document.documentElement.scrollTop<c ?  header.style.position='fixed' : header.style.position='static'
              c=document.documentElement.scrollTop;
              }
          }, 2000); 
         
        },[])
  return (
    <ThemContext.Provider value={theme} >
       <div style={{backgroundColor:theme.body,transition:'all .3s linear'}} className="App">
      {
        loading ?  
              <div className="loading">
                <ScaleLoader  color={"slateblue"} loading={loading}  size={150} /> 
              </div>
         :
          <div>
            
      <a name="haut"/>
               <Header func={()=>{
                 theme.logomode===dark?settheme(darkTheme): settheme(lightTheme);}}/>
               <Main/>
               <Footer/>
          </div>
      }
      </div>
    </ThemContext.Provider>
  );
}


export default App;
