import './footer.css'
import {ThemContext} from '../../App'
import { useContext } from 'react';
export default function Footer() {
   const theme=useContext(ThemContext)
    return(
        <div style={{color:theme.text ,boxShadow:theme.boxshadow}} className="footer spacebcontainer">
        <div className="fcontact">
           <h1 style={{color:theme.text}}>Let's Talk</h1>
           <p style={{color:theme.text}}>
           Every project starts with a chat...</p>      
               <a href="#contact">Tell Me About Your Project</a>                       
        </div>
    <ul className="ulfooter">
        <li style={{color:theme.text}}>Email : bejganadriss@gmail.com</li>
        <li style={{color:theme.text}}>PhoneNumber : +212648192642</li>
        <li style={{color:theme.text}}>Address : Lamzoudia Chichaoua</li>
    </ul>
    <h4 className='createur'>Created By DrissBejgana</h4>
  </div>

    );
}