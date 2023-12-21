import styles from '../styles/nutrition.module.scss';

import FooterWhite from 'components/footer-white/footer.component';
import Head from 'next/head';

const CookiePolicy = () => {
    return (
        <>
         <Head>
        <title>Cookie Policy | Mystic Grove</title>
        <meta name="description" content="Term Of Use | Mystic Grove" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a"/>
      </Head>
         <div className={styles.nutritionWrapper}>
         <img src="/assets/back.jpg" className={styles.back} alt="" srcset="" />
        
            <h1>Cookie Policy</h1>
            
            <div className={styles.container}>
                <p style={{alignSelf:"flex-end"}}>Last updated: 28/11/2023</p>
                <p>At Mystic Grove, accessible from https://www.themysticgrove.com, one of our main priorities is the privacy of our visitors. This Cookie Policy document will present the types of information that are collected, recorded and used by us.</p>
                <h3>What are cookies?</h3>
                <p>Cookies are small text files that a website stores on your device when the website is loaded on your browser. They are widely used in order to make websites work, work more efficiently, as well as to provide information to the owners of the site such as, your language preference.
login information...
<br />
This website uses <span className={styles.bold}>first party cookies</span> which are cookies set by us. Only we can read them. In addition, our website might potentially use external services, which also set their own cookies, known as third-party cookies. These third-party cookies are cookies from a domain different than the domain of our website.<span className={styles.bold}> These third-party cookies</span> are used for our advertising and marketing efforts.</p>

<p>There are different types of cookies: we use both persistent and session cookies.</p>
<p><span className={styles.bold}>Persistent cookies</span> are cookies saved on your computer and that are not deleted automatically when you quit your browser. These remain on your device for a set period of time specified in the cookie. They are activated each time you visit our website. This allows the site to re-member your information and settings for your next visit, making your experience more efficient and personal.</p>
<p><span className={styles.bold}>Session cookies,</span> are deleted when you leave our website. These are temporary cookies that remain on your device until you leave our website. They are used to ensure that you are recognized when you move from page to page within the site and that any information you have entered is remembered during that visit.</p>
            <h3>How do we use cookies?</h3>
            <p className={styles.lessMargin}>The <span className={styles.bold}>3 types of first-party cookie</span>  we use are:</p>
            <ul>
                <li>Essential cookies</li>
                <li>Performance and analytics cookies</li>
                <li>Functional cookies</li>
            </ul>
            <h3>Essentail cookies</h3>
            <p>These are cookies that we have to include in order to ensure that our website functions as intended. They also allow us to maintain user sessions. They do not collect or store any personal information. You can set your browser to block or alert you about these cookies, but some parts of the site will not work as intended.</p>
            <h3>Performance and analytics cookies</h3>
            <p>We use these purely for internal research on how we can improve the service we provide for all our users. These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc.
You are free to refuse these types of cookies – either via the cookie banner you’ll see on the first page you visit or at</p>
<h3>Functional cookies</h3>
<p>These cookies allow us to offer enhanced functionality and personalization, including recognizing you when you return to our website and
remembering your user preferences (for example, your choice of language or region).. They may be set by us or by third party providers whose services we have added to our pages. Without these cookies, some or all of these services may not function properly.</p>
          <h3>Third-party cookies</h3>
          <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:
Analytics providers such as Google Analytics: These cookies are set by Google Analytics and are used to collect information about how visitors use our website. We use this information to compile reports and to help us improve our website. The cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come from, and the pages they visited.
</p>
        <h3>Managing Cookies</h3>
        <p>You can manage the use of cookies at any time by adjusting your browser settings. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of our website.</p>
            <h3>How can you manage cookies?</h3>
            <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
            <p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
Removing cookies from your device
You can delete all cookies that are already on your device by clearing the browsing history of your browser. This will remove all cookies from all websites you have visited.
Be aware though that you may also lose some saved information (e.g. saved login details, site preferences).</p>
<h3>Your browser settings</h3>
<p>Your browser includes controls that allow you to manage the use of cookies by the sites that you visit. Most browsers have features that enable you to see and delete cookies stored on your device and to block cookies from all or selected sites. For more information, here are links to external help materials from some of the popular browsers:</p>
<ul>
    <li><a target='blank' href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">Mozilla Firefox</a></li>
    <li><a target='blank' href="https://support.apple.com/en-lb/guide/safari/sfri11471/mac">Apple Safari</a></li>
    <li><a target='blank' href="https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop">Google Chrome</a> </li>
    <li><a target='blank' href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge</a> </li>
</ul>
<h3>Your mobile device settings</h3>
<p>Your mobile device may also include browser settings that allow you to manage the use of cookies, especially if the device supports installing apps such as iOS and Android devices. iOS and Android devices also include additional device settings that control whether advertising partners can use information about your app activity for advertising purposes. On iOS, you can search for a setting called Limit Ad Tracking. On Android, you can search for a setting called Opt out of Ads Personalization.
Blocking cookies
You can set most modern browsers to prevent any cookies being placed on your device, but you may then have to manually adjust some preferences every time you visit a site/page. And some services and functionalities may not work properly at all (e.g. profile logging-in).</p>
            <h3>Your Consent</h3>
            <p>By using our website, you hereby consent to our Cookie Policy and agree to its terms.</p>
            <h3>Changes to Our Cookie Policy</h3>
            <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
            <h3>More Information</h3>
            <p>Hopefully, that has clarified things for you. If you have any questions about our Cookie Policy, please do not hesitate to contact us through email at info@themysticgrove.com.</p>
            </div>
            
        </div>
        <FooterWhite/>
        </>
       
    )
}

export default CookiePolicy;