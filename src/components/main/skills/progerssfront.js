import React,{useEffect} from 'react';
import './progressfront.css'
import './progress.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Progerssfront() {
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
    
    observer.observe(document.querySelector('.skill-bars'));
 },[])
    
    return (
        <div data-aos="fade-out" className="skill-bars">
    <div className="bar">
      <div className="info">
        <span>HTML</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>JavaScript</span>
      </div>
      <div className="progress-line JavaScript">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>React JS</span>
      </div>
      <div className="progress-line react">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Matriel UI</span>
      </div>
      <div className="progress-line mui">
        <span></span>
      </div>
    </div>
  </div>

    );
}

export default Progerssfront;