import React,{useEffect} from 'react';
import './progressback.css'
import './progress.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Progerssback() {
  useEffect(()=>{
    AOS.init({
       duration : 3000
     });
     const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
           for (let i = 0; i <  entry.target.children.length; i++) {
            entry.target.children[i].children[1].style.animation='animate 1s cubic-bezier(1,0,0.5,1) forwards';
            entry.target.children[i].children[1].children[0].style.animation='animate 1s 1s cubic-bezier(1,0,0.5,1) forwards';
             
           }
        }
        else
        {
          for (let i = 0; i <  entry.target.children.length; i++) {
            entry.target.children[i].children[1].style.animation='none';
            entry.target.children[i].children[1].children[0].style.animation='none';
             
           }
        }
      });
    });
    
    observer.observe(document.querySelector('.bars'));
 },[])
    
    return (
        <div data-aos="fade-out" className="skill-bars bars">
    <div className="bar">
      <div className="info">
        <span>PHP</span>
      </div>
      <div className="progress-line php">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>C#</span>
      </div>
      <div className="progress-line csharp">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>ASP.Net</span>
      </div>
      <div className="progress-line asp">
        <span></span>
      </div>
    </div>
   
    <div className="bar">
      <div className="info">
        <span>SQL</span>
      </div>
      <div className="progress-line sql">
        <span></span>
      </div>
    </div>
  </div>

    );
}

export default Progerssback;