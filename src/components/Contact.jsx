import { SocialIcon } from 'react-social-icons';
const Contact= ()=>{
    return(
        <div className="contact">
        <h1>Reach Me out at</h1>
        <br></br>
        <SocialIcon url="https://github.com/vmanish219" target="_blank" bgColor="#ffffff" />
        <SocialIcon url="https://www.linkedin.com/in/vmanish219/" target="_blank" bgColor="#ffffff" />
        <SocialIcon url="https://www.instagram.com/manish_vermaa/" target="_blank" bgColor="#ffffff" />
        <SocialIcon url="https://wa.me/918750302751" network="whatsapp" target="_blank" bgColor="#ffffff" />
        <br></br>
        <p>Made with ❤️ by Manish Verma</p>
        </div>
    )
}

export default Contact;