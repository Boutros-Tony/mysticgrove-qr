import Link from "next/link";
import styles from './footer.module.scss';
import { useState } from "react";

const Footer = ({bgColor,fontColor,srcSign,iconsColor}) => {
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            // Add the contact to your Firebase database
            await addContact({ email, country, message });

            // Clear the input fields
            setEmail('');
            setCountry('');
            setMessage('');

            // Show success message
            setStatus('Thank you for contacting us! We will be in touch soon.');
        } catch (error) {
            // Show error message
            setStatus(`Sorry, there was a problem submitting your message. Please try again. Error: ${error.message}`);
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }
    return (
        <div id="contact" className={`${styles.footerHolder} ${styles[bgColor]}`}>
             
        <p className={`${styles[fontColor]}`}>FOR ALL INQUIRIES PLEASE USE THE BELOW FORM TO CONTACT US.  <br />
        YOU CAN also USE THIS FORM TO STAY UP-TO-DATE <br className="br-phone" /> WITH EVERYTHING RELATED TO MYSTIC GROVE.</p>
        <form onSubmit={handleSubmit}  onKeyDown={handleKeyDown}>
                <div>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <textarea name="" id="" cols="30" rows="3" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
            <p>{status}</p>
        <div className={styles.footerRowOne}>
            <div className={styles.socialMedia}>
                <div className={styles.iconsHolder}>
                <Link href="https://www.facebook.com/mysticgrovegin/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="48.381" height="48.158" viewBox="0 0 48.381 48.158">
  <path className={`${styles[iconsColor]}`} id="Path_8689" data-name="Path 8689" d="M449.008,7541.738h5.47c.173,0,.333.021.365-.239.264-2.124.541-4.247.812-6.371a.673.673,0,0,0-.013-.124h-6.609a1.266,1.266,0,0,1-.049-.222c0-1.508-.024-3.016.027-4.522a4.214,4.214,0,0,1,.361-1.564,2.383,2.383,0,0,1,2.266-1.268c1.24-.063,2.484-.042,3.726-.057.157,0,.313,0,.509,0,.012-.159.03-.285.031-.411,0-1.759,0-3.518,0-5.277,0-.256-.052-.387-.341-.4-1.9-.057-3.809-.245-5.7-.162a7.587,7.587,0,0,0-6.814,4.123A10.436,10.436,0,0,0,442,7530.2c-.006,1.572,0,3.145,0,4.774h-5.8v6.766h.474c1.64,0,3.279.009,4.919-.008.333,0,.419.1.418.426q-.014,8.985-.007,17.97c0,.116-.013.231-.019.349a24.129,24.129,0,1,1,7.027.179Z" transform="translate(-421.85 -7512.5)" fill="#d0a97c"/>
</svg>
</Link>
<Link target="_blank" href="https://www.instagram.com/mysticgrovegin/">
<svg xmlns="http://www.w3.org/2000/svg" width="48.157" height="48.131" viewBox="0 0 48.157 48.131">
  <g id="Group_1657" data-name="Group 1657" transform="translate(-466.224 -7119.874)">
    <path className={`${styles[iconsColor]}`} id="Path_8690" data-name="Path 8690" d="M528.3,7536.584a24.078,24.078,0,1,1-24.014-24.057,24.06,24.06,0,0,1,24.014,24.057m-37.188.305h.02c0,1.932-.052,3.865.01,5.8a7.091,7.091,0,0,0,7.381,7.213q5.551.063,11.106,0a7.127,7.127,0,0,0,7.394-7.289q.118-5.739,0-11.484a7.01,7.01,0,0,0-6.831-7.2c-4.061-.092-8.127-.071-12.188,0a6.79,6.79,0,0,0-6.359,4.587,11.5,11.5,0,0,0-.513,3.127c-.081,1.748-.021,3.5-.021,5.254" transform="translate(-13.919 -392.653)" fill="#d0a97c"/>
    <path className={`${styles[iconsColor]}`} id="Path_8691" data-name="Path 8691" d="M504.1,7547.441c-1.859,0-3.72.034-5.579-.008a4.757,4.757,0,0,1-5.04-4.945c-.087-3.79-.081-7.584,0-11.375.062-2.97,1.755-4.676,4.727-4.852,1.728-.1,3.466-.045,5.2-.04,2.238.006,4.481-.058,6.714.069a4.614,4.614,0,0,1,4.54,4.741q.087,5.849,0,11.7a4.662,4.662,0,0,1-4.709,4.686c-1.948.063-3.9.013-5.85.013Zm-.085-4.007a6.646,6.646,0,1,0-6.65-6.651,6.67,6.67,0,0,0,6.65,6.651m8.511-13.589a1.539,1.539,0,0,0-1.577-1.566,1.559,1.559,0,0,0-1.536,1.562,1.557,1.557,0,0,0,3.113,0" transform="translate(-13.919 -392.653)" fill="#d0a97c"/>
    <path  className={`${styles[iconsColor]}`}id="Path_8692" data-name="Path 8692" d="M508.32,7536.8a4.3,4.3,0,1,1-4.289-4.316,4.3,4.3,0,0,1,4.289,4.316" transform="translate(-13.919 -392.653)" fill="#d0a97c"/>
  </g>
</svg>

</Link>
                </div>
     
<h1 className={`${styles[fontColor]}`}>MYSTICGROVEGIN</h1>
</div>
<h3 className={`${styles[fontColor]}`}>Master distiller <img src={srcSign ? srcSign : "/assets/sign-gold.svg"} alt="" />
</h3>
<h3 className={`${styles[fontColor]}`}>© 2023 MYSTIC GROVE <br className="br-phone"/> ALL RIGHTS RESERVED.</h3>
        </div>
        <div className={styles.footerRowTwo}>
        <div className={styles.ageLinksHolder}>
        <Link className={`${styles[fontColor]}`} href="/nutrition-information">Nutritional Information</Link>
                <Link className={`${styles[fontColor]}`}  href="/privacy-policy">PRIVACY POLICY</Link>
                <Link  className={`${styles[fontColor]}`} href="/terms-of-use">TERMS OF USE</Link>
                <Link className={`${styles[fontColor]}`}  href="/cookie-policy">COOKIE POLICY</Link>
            </div>
            <p className={`${styles[fontColor]}`}>
            FOR MORE INFORMATION ON ALCOHOL RESPONSIBILITY VISIT: <br className="br-phone" /> <a target="_blank" rel="noreferrer" href="http://www.responsibledrinking.org/">RESPONSIBLEDRINKING.ORG</a> , <Link target="_blank" href="https://responsibledrinking.eu/">RESPONSIBLEDRINKING.Eu</Link> and <Link target="_blank" href="https://www.drinkaware.co.uk/">DRINKAWARE.CO.UK </Link>  
            </p>
        </div>
        </div>
    )
}


export default Footer;