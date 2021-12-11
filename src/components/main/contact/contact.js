import react,{ Component } from "react"
import contact_us from './contact_us.svg'
import React, { useRef,useContext,useEffect} from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { ThemContext } from "../../../App"

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact(){
   useEffect(() => {
      AOS.init({
        duration : 2000
      });
    }, []);
   const theme=useContext(ThemContext)
   const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jst3buk', 'template_1a7rhxi', form.current,'user_f2JIbpQLiRhHnNtvolPhP')
          .then((result) => {
              console.log(result.text);
              alert("Sent successfully");
          }, (error) => {
              alert("Error")
          });
      };


     return(
<div className="spacebcontainer" data-aos="fade-up">
         <h1 style={{color:theme.text , textAlign:"center"}}>Contact Me</h1>
         <a name="contact"/>
        <div className="contact">
               <div className="contact_contatiner"  >
            <img src={contact_us} />
            <div>
               <form ref={form} onSubmit={sendEmail} className="contact_form" >
                  <label style={{color:theme.text}} >Name :</label>
                  <input placeholder='enter your name' name="fullname"  type="text" />
                 <label style={{color:theme.text}} >Email :</label>
                  <input placeholder='enter your email' name="email" type="email" /> 
                  <label style={{color:theme.text}}>Message :</label>
                  <textarea placeholder='entre your message' name="message">    
                  </textarea>
                  <input className="buttton" type="submit" value="Send Message"/>
               </form>
            </div>
        </div>
       </div>
        
</div>
       
     );
}

