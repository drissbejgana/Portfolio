import './App.css';
import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from './components/footer/footer'
import React,{useState,useEffect} from 'react';

import dark from  './img/moon.png' 
import light from  './img/sunshine.png' 
import bat from  './img/bat.png' 
import butterfly from  './img/butterfly.png' 
import ScaleLoader from "react-spinners/ScaleLoader";
import { darkTheme,lightTheme } from './theme';


export const ThemContext=React.createContext()
function App() {
        
        const [mode,setmode]=useState(dark)
        const [fly,setfly]=useState(butterfly)
        const [theme,settheme]=useState(lightTheme)
        const [loading, setLoading] = useState(true);
        useEffect(()=>{
          setLoading(true)
          setTimeout(() => {
          setLoading(false) 
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
                   if(mode===dark)
                   {
                     setmode(light);
                     setfly(bat);
                     settheme(darkTheme);
                     
                   }
                   else if(mode===light){
                         setmode(dark);
                         setfly(butterfly);
                         settheme(lightTheme);
                       } 
               }}  mode={mode}/>
              
              <Main fly={fly}/>
              <Footer/>
          </div>
      }
      </div>
    </ThemContext.Provider>
  );
}

export default App;
