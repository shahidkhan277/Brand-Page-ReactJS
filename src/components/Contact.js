import React from 'react'
import { useState } from 'react';
import '../form-style.css';

const Contact = () => {
    const [name, setName] = useState(""); 
        const [number, setNumber] = useState(""); 
        const [email, setEmail] = useState(""); 
        const [subject, setSubject] = useState("Subject"); 
        const [textarea, setTextarea,] = useState(""); 

    const getIsFormValid = () => { 
            return ( 
              name && 
              subject !== "Subject" 
            ); 
          };
    const clearForm = () => { 
            setName(""); 
            setNumber(""); 
            setEmail(""); 
            setSubject("Subject"); 
            setTextarea("");
          };  
    const handleSubmit = (e) => { 
      e.preventDefault();
      if(number.length <= 8){
        return  alert('Please Add Full Number')
        
      }
      if(textarea.length < 10){
        return alert('Please Explain it Briefly');
        
      }
      
            e.preventDefault(); 
            alert("Thank For Your Feedback We'll Try Our Best to Give You Response as Soon as Possible"); 
            clearForm(); 
          };

  return (
    <div id="container">
  <div className='underline'>
    <img src='brand_logo.png'/>
  </div>
  <h1>&bull; Please Give us Your Feedback &bull;</h1>
 
  <form action="#" method="" onSubmit={handleSubmit} id="contact_form">
    <div className="name">
      <label htmlFor="name"></label>
      <input type="text"  value={name} 
             onChange={(e) => { 
               setName(e.target.value); 
             }}  
             placeholder="My name is" name="name" id="name_input" required/>
    </div>
    <div className="email">
      <label htmlFor="email"></label>
      <input type="email"
      value={email} 
      onChange={(e) => { 
        setEmail(e.target.value); 
      }} 
       placeholder="My e-mail is" name="email" id="email_input" required/>
    </div>
    <div className="telephone">
      <label htmlFor="number" className='pnumber'></label>
      <input type="number" 
      value={number} 
      onChange={(e) => { 
        setNumber(e.target.value); 
      }}  placeholder="My number is" name="telephone" id="telephone_input" required/>
       
    </div>
    <div className="subject">
      <label htmlFor="subject"></label>
      <select placeholder="Subject line" name="subject"
      value={subject} onChange={(e) => setSubject(e.target.value)}
       id="subject_input" required>
        <option>{subject}</option>
        <option>I'd like to start a project</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div className="message">
      <label htmlFor="message"></label>
      <textarea name="message" placeholder="I'd like to chat about"
       value={textarea} onChange={(e) => setTextarea(e.target.value)} id="message_input" cols="30" rows="5" required></textarea>
    </div>
    
      <button type="submit" className='submit' id="form_button" disabled={!getIsFormValid()}>
      Send Message
       </button> 
  </form>
</div>

  )
}

export default Contact
