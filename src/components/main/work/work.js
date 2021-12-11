import React,{useEffect,useContext} from 'react';
import './work.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemContext } from '../../../App';

const Work= () => {

    const theme=useContext(ThemContext)
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div className='spacebcontainer'>
        <a name="work"/>
        <h1 style={{color:theme.text}}>All Project</h1>
        <div data-aos="zoom-out" className='container_work'>
             <div className="card" >
                 <div className="langs" >
                     <div>HTML5</div>
                     <div>CSS3</div>
                     <div>JavaScript</div>
                     <div>Responsive</div>
                     <div>Animation</div>
                     <div>ChartJs</div>
                 <a target="_blank" href="http://driss.42web.io/projet/homepage.html">Visit Website</a>
                 </div>
                 <span></span>
             </div>
             <div className="card">
                 <div className="langs">
                     <div>HTML5</div>
                     <div>CSS3</div>
                     <div>JavaScript</div>
                     <div>Asp.net</div>
                     <div>Sql Server</div>
                     <div>Responsive</div>
                     <div>Animation</div>
                 <a href="">Visit Website</a>
                 </div>
                 <span></span>
             </div>
             <div className="card">
                 <div className="langs">
                 <div>ReactJS</div>
                     <div>HTML5</div>
                     <div>CSS3</div>
                     <div>JavaScript</div>
                     <div>Aos Library</div>
                     <div>Animation</div>
                 <a href="">Visit Website</a>
                 </div>
                 <span></span>
             </div>
             
        </div>
        </div>
    );
};

export default Work