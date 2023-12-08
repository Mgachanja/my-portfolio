import React,{useRef} from 'react'
import '../styles/contacts.css'
import { GitHub, Instagram, LinkedIn, Twitter, WavingHand, WhatsApp,} from '@mui/icons-material'
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edtnxoo', 'template_7rnnwjj', form.current, 'kqngMplhGlZa0HLim')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }  
  


  return (
    <div className='contactsPage'>
    <h1 id='title'>talk to me</h1>
      <div className='sendMessage'>
        <form className='SendEmail' method='POST' onSubmit={sendEmail}>
          <label htmlFor='name'>full Name</label>
          <input className='inputs' id='name' name='from_name' placeholder='Enter Full Name ...' type='Text'/>
          <label htmlFor='email'>Email</label>
          <input className='inputs' id='email' name='from_email' placeholder='Enter Your Email ...' type='email'></input>
          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter Massage ...' id='message'
          name='message' required>
          </textarea>
          <button type='submit'>Send Message</button>
        </form>
        </div>
      <h1 id='title'> connect with me</h1>
      <div className='socialsContainer'>
          <ul>

            <div className='socialContainer'>
              <div className='icon'><LinkedIn  style={{fontSize:`${150}`, color:'skyblue'}}
              /></div>
              <p>ready for connections and endorsements<br/>reach out at</p>

            </div><div className='socialContainer'>
              <div className='icon'><GitHub  style={{fontSize:`${150}`, color:'white'}}/></div>
              <p>lets collaborate on that awesome tech idea!!<br/> reachout at</p>

            </div><div className='socialContainer'>
              <div className='icon'><Twitter style={{fontSize:`${150}`, color:'blue'}}/></div>
              <p>lets stay up-to-date and also contribute to the amazing tech trends and innovations.<br/>reach out</p>

            </div><div className='socialContainer'>
              <div className='icon'><Instagram  style={{fontSize:`${150}`,color:'hotpink'}}/></div>
              <p>lets talk and share literally anything.<br/>reach out</p>
            </div>

            <div className='socialContainer'>
              <div className='icon'><WhatsApp  style={{fontSize:`${150}`, color:'darkgreen'}}/></div>
              <p>ask me about anything!!<br/>reach out</p>
            </div>
          </ul>
    </div>
        <div className='footer'>
           <p>happy hacking !!</p> 
           <WavingHand style={{fontSize:100 ,color:'lightyellow'}}/>
        </div>
    </div>
  )
  }

export default Contact