import Head from 'next/head'


import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Footer from 'components/footer/footer.component'
import {motion} from 'framer-motion'
import VideoComponent from 'components/video-component/video-component'
import HorizontalScroll from 'components/paralax/paralax.component'
import Characters from 'components/characters/characters.component'
export default function Home() {
  const Key = () => {
    return (
        <>
        <svg   viewBox="0 0 48.019 43.911">
  <g id="Group_1" data-name="Group 1">
    <path id="Path_2" data-name="Path 2" d="M239.365,798.3l-.5-.5-1.621,1.624a.375.375,0,0,0,0,.53l1.224,1.227a.377.377,0,0,0,.532,0l1.2-1.2,1.075,1.078.63-.631a.518.518,0,0,1,.733,0,.523.523,0,0,1,0,.735l-.63.631.806.808-.829.831a2.2,2.2,0,0,0,3.106,3.113l16.054-16.091L277.2,806.542a2.2,2.2,0,0,0,3.105-3.113l-.829-.831.806-.808-.63-.631a.523.523,0,0,1,0-.735.517.517,0,0,1,.733,0l.63.631,1.075-1.078,1.2,1.2a.377.377,0,0,0,.532,0l1.224-1.227a.375.375,0,0,0,0-.53l-1.621-1.624-.5.5-1.23-1.233-1.232-1.235.5-.5-1.618-1.622a.37.37,0,0,0-.529,0l-1.224,1.227a.376.376,0,0,0,0,.533l1.2,1.2-1.075,1.077.63.632a.519.519,0,1,1-.733.735l-.63-.631-.806.808-.639-.641-11.284-11.31,2.107-2.112.581.582a.291.291,0,0,0,.41,0l1.618-1.621.893-.9.481-.482a.292.292,0,0,0,0-.411l-.581-.582,2.335-2.34a3.771,3.771,0,0,0,3.3-1.058c.046-.046.087-.1.133-.15a5.253,5.253,0,0,0,8.087.792,5.262,5.262,0,0,0-.8-8.108c.052-.046.109-.082.157-.13a3.788,3.788,0,0,0-5.351-5.363c-.049.049-.092.1-.136.147a5.475,5.475,0,0,0-.646-.789,5.266,5.266,0,1,0-7.438,7.455,5.189,5.189,0,0,0,.787.647c-.052.046-.1.09-.147.136a3.8,3.8,0,0,0-1.059,3.308l-2.335,2.34-.581-.582a.29.29,0,0,0-.41,0l-.481.481-.893.9-1.618,1.622a.292.292,0,0,0,0,.411l.581.582-2.107,2.112-2.107-2.112.581-.582a.291.291,0,0,0,0-.411L258,779.5l-.893-.9-.481-.481a.29.29,0,0,0-.41,0l-.581.582-2.335-2.34a3.8,3.8,0,0,0-1.059-3.308c-.046-.046-.1-.09-.147-.136a5.2,5.2,0,0,0,.787-.647,5.266,5.266,0,1,0-7.438-7.455,5.517,5.517,0,0,0-.646.789c-.043-.049-.087-.1-.136-.147a3.788,3.788,0,0,0-5.351,5.363c.049.049.106.084.157.13a5.265,5.265,0,1,0,6.64,8.108,5.217,5.217,0,0,0,.649-.792c.046.052.087.1.133.15a3.771,3.771,0,0,0,3.3,1.058l2.335,2.34-.581.582a.292.292,0,0,0,0,.411l.48.482.893.9,1.618,1.621a.291.291,0,0,0,.41,0l.581-.582,2.107,2.112-11.284,11.31-.639.641-.806-.808-.63.631a.519.519,0,0,1-.733-.735l.63-.632-1.075-1.077,1.2-1.2a.376.376,0,0,0,0-.533l-1.224-1.227a.37.37,0,0,0-.529,0l-1.618,1.622.5.5-1.232,1.235Zm34.619-21.29a1.789,1.789,0,1,1,0-2.533A1.786,1.786,0,0,1,273.984,777.006Zm7.878.3a2.785,2.785,0,1,1,0-3.94A2.775,2.775,0,0,1,281.862,777.306Zm-2.826-10.429a1.789,1.789,0,1,1,0,2.533A1.782,1.782,0,0,1,279.036,766.876Zm-1.716,3.619a.446.446,0,0,1,.63.631l-2.256,2.261a.446.446,0,0,1-.63-.631Zm-6.165-3.921a2.785,2.785,0,1,1,0,3.945A2.775,2.775,0,0,1,271.156,766.574Zm-30.425.3a1.789,1.789,0,1,1,0,2.533A1.782,1.782,0,0,1,240.731,766.876Zm3.632,10.432a2.785,2.785,0,1,1,0-3.945A2.775,2.775,0,0,1,244.363,777.308Zm2.864-3.921a.445.445,0,0,1-.63,0l-2.256-2.261a.446.446,0,0,1,.63-.631l2.256,2.261A.448.448,0,0,1,247.227,773.387Zm3.611,3.619a1.789,1.789,0,1,1,0-2.533A1.786,1.786,0,0,1,250.838,777.006Zm.3-6.487a2.785,2.785,0,1,1,0-3.945A2.776,2.776,0,0,1,251.136,770.519Z" transform="translate(-237.136 -763.275)" fill="#DFAD75"/>
    <path id="Path_3" data-name="Path 3" d="M396.333,813.148l2.321-1.221,2.322,1.221-.443-2.585,1.878-1.831-2.6-.377L398.654,806l-1.161,2.352-2.6.377,1.878,1.831Z" transform="translate(-374.597 -799.356)" fill="#DFAD75"/>
    <path id="Path_4" data-name="Path 4" d="M399.815,1030.979l-1.161-2.352-1.161,2.352-2.6.377,1.878,1.831-.443,2.585,2.321-1.221,2.322,1.221-.443-2.585,1.878-1.831Z" transform="translate(-374.597 -994.969)" fill="#DFAD75"/>
    <path id="Path_5" data-name="Path 5" d="M275.021,926.41l-1.161-2.352L272.7,926.41l-2.6.377,1.878,1.831-.443,2.585,2.322-1.22,2.322,1.22-.443-2.585,1.878-1.831Z" transform="translate(-264.975 -903.34)" fill="#DFAD75"/>
    <path id="Path_6" data-name="Path 6" d="M522.291,926.41l-1.161-2.352-1.161,2.352-2.6.377,1.878,1.831-.443,2.585,2.321-1.22,2.322,1.22-.444-2.585,1.878-1.831Z" transform="translate(-482.241 -903.34)" fill="#DFAD75"/>
  </g>
        </svg>
       </>
    )
}
const variants = {
  visible: { opacity: 1, x: 0 ,width:"110%"},
  hidden: { opacity: 0, x: -100 },
};
const variantsGlass = {
  visible: { opacity: 1, x: 0 ,width:"110%",zIndex:"2"},
  hidden: { opacity: 0, x: -100 ,width:"110%",zIndex:"2"},
};
const variantsGlass2 = {
  visible: { opacity: 1, x: 0 ,width:"110%",zIndex:"2"},
  hidden: { opacity: 0, x: 100 ,width:"110%",zIndex:"2"},
};
const variantsright = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};
const variantsbottom = {
  visible: { opacity: 1, y: 0 ,width:"90%"},
  hidden: { opacity: 0, y: 100,width:"90%" },
};
const variantsChar = {
  visible: { opacity: 1 ,width:"100%",position:"absolute",top:"0"},
  hidden: { opacity: 0,width:"100%" ,position:"absolute",top:"0"},
}
const variantsVideo = {
  visible: { opacity: 1 ,width:"70%",x:0,zIndex:"1"},
  hidden: { opacity: 0,width:"70%" ,x:-50,zIndex:"1"},
}
const variantsVideoTwo = {
  visible: { opacity: 1 ,width:"80%",y:0,zIndex:"1"},
  hidden: { opacity: 0,width:"80%" ,y:50,zIndex:"1"},
}
const variantsTextVideo = {
  visible: { opacity: 1 ,width:"95%",x:0,zIndex:"1"},
  hidden: { opacity: 0,width:"95%" ,x:50,zIndex:"1"},
}
const variantsLogo = {
  visible: { opacity: 1 ,width:"30%",y:0,position:"absolute",top:"8%",left:"50%",},
  hidden: { opacity: 0,width:"30%" ,y:-100,position:"absolute",top:"8%",left:"50%",},
}
const variantsBooks = {
  visible: { opacity: 1 ,width:"100%",y:0},
  hidden: { opacity: 0,width:"100%" ,y:50},
}
  return (
    <>
      <Head>
        <title>The Mystic Grove</title>
        <meta name="description" content="The Mystic Grove" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <div className={styles.mainWrapper}>
    
        <div className={styles.verticalCenterWrapper}>
        <img className={styles.mainBgImg} src="/assets/background.jpg" alt="" />
        <img className={styles.darkLogo} src="/assets/dark-logo.png" />
        <div className={styles.textKeysHolder}>
        <Key/>
        <div className={styles.verticalCenterWrapper}>
          
          <img className={styles.titleImage} src="/assets/title.png" />
          <div className={styles.separator}></div>
          <h3>join the mystery and become part of <br /> the grove's community</h3>
        </div>
        <Key/>
        </div>
      
            <img className={styles.pattern} src="/assets/pattern.png" alt="" srcset="" />
        <div className={styles.linksHolder}>
          <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1 ,delay:1}}
                variants={variants}>
                    <Link target="_blank" className={styles.tunnel} href="https://www.instagram.com/mysticgrovegin/">
          <img src="/assets/tunnel-of-love.jpg"  />
          <img src="/assets/instagram.png" className={styles.centerIcon}  />
          <div className={styles.linksBox}>
            <p>Learn more about our story <br />
by visiting our instagram</p>
<span>@mysticgrovegin</span>
          </div>
          </Link>
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 ,delay:1}}
          variants={variantsright}
          >
          <Link  target="_blank" className={styles.imagine} href="https://themysticgrove.com/">
          <img src="/assets/imagine.jpg"  />
          <img src="/assets/website.png" className={styles.centerIcon}  />
          <div className={styles.linksBox}>
            <p>Take a glance at  <br />
our website </p>
<span>www.themysticgrove.com</span>
          </div>
          </Link>
          </motion.div>
         
        </div>
        <div className={styles.boxText}>
            <div className={styles.line}></div>
            <div className={styles.rectangle}>
              <div className={styles.smallRectangle}>
                <span className={styles.est}>EST.</span>
                <span className={styles.year}>1950</span>
              </div>
              <div className={styles.middleRectangle}>
                <p>
                  4 generations <br /> <span>of gin mastery</span> 
                </p>
              </div>
              <div className={styles.smallRectangle}>
                <span className={styles.gin}>GIN</span>
               </div>
            </div>
            <div className={styles.line}></div>
        </div>
        </div>

      <div className={styles.sectionTwo}>
        <div className={styles.lfBorder}></div>
        <div className={styles.lfBorder2}></div>
        <div className={styles.rfBorder}></div>
        <div className={styles.rfBorder2}></div>
        <div className={styles.bgOne}></div>
        <div className={styles.bgTwo}></div>
        <div className={styles.verticalCenterWrapperTwo}>
          <h1 className={styles.darkTitle}>Mystic Grove Gin</h1>
          <h2 className={styles.darkSubTitle}>A legacy envisioned into perfection</h2>
          
          <Key/>
          <p className={styles.darkText}>The truth is, when carefully <span>crafting a masterpiece,</span><br />
one must be able to render <br />
<span>experience into taste</span> and <span>excellence into legacy.</span></p>
<p className={styles.darkText}><span>Mystic Grove</span> is the answer to enjoying <br />
a genuine gin journey like no other. <br />
<span style={{fontStyle:"italic"}}>“UNRIVALLED”</span></p> 
<motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: false }}
 transition={{ duration: 1 }}
 variants={variantsbottom}
>
<img className={styles.visualOne} src="/assets/visual1.jpg" />
</motion.div>

<motion.div
   initial="hidden"
   whileInView="visible"
   viewport={{ once: false }}
   transition={{ duration: 1 }}
   variants={variantsVideo}
>

      <VideoComponent src="/assets/video1.mp4" />

</motion.div>
    <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsTextVideo}
    >
        <p className={styles.goldText}>
      The flower from which all wealth blooms. A potent <br />
symbol of renewal, rebirth, hope and growth. <br />
 A harmony of Chapter VIII 
      </p>
     
      
    </motion.div>
    <div className={styles.goldDivider}></div>
    <img className={styles.miniLogo} src="/assets/mini-logo.png" />
      <div className={styles.rectTitle}>
        <span></span>
        <h1>Mystic Grove Gin <br />
A lifestyle that precedes distinction</h1> <span></span>
      </div>
      <p className={styles.goldText}>
      <span>Mystic Grove</span> has become a brand that mystically inspires <br /> people to thematically precede elegance through its <br /> distinguished presentation of its tasteful gin, <br />
increasing their confidence in their own <br />
lifestyle without second-thinking quality or identity. <br />
<br />
It’s a balance of story and craft that innovate the <br />
way people perceive their relationship with gin.
      </p> 
      <div className={styles.libraryHolder}>
      <img className={styles.library} src="assets/library.jpg"  />
      <motion.div   initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsLogo}>
      <img className={styles.libraryLogo} src="/assets/library-logo.png"  />
      </motion.div>
     
      <div className={styles.libraryBooks}>
      <motion.div initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsBooks}>
          <div className={styles.booksHolder}>
          <img src="/assets/book1.png" />
          <img src="/assets/book2.png"  />
          <img src="/assets/book3.png"  />
        </div>
      </motion.div>
      
      <div className={styles.libraryTitle}>
        <Key/>
        
        <img className={styles.titleImagee} src="/assets/title-2.png"/>
        <Key/>
      </div>
      </div>
    
      </div>
     
        </div>
      </div>
      <HorizontalScroll/>
      <div className={styles.sectionThree}>
        <div className={styles.verticalCenterWrapperThree}>
          <img className={styles.bgSecThree} src="/assets/visual2.jpg" alt="" srcset="" />
          <div className={styles.textImgHolder}>
          <img className={styles.textImg} src="/assets/text.png" />
          </div>
          <motion.div  initial="hidden"
   whileInView="visible"
   viewport={{ once: false }}
   transition={{ duration: 1 }}
   variants={variantsVideo}>
    <VideoComponent src="/assets/video2.mp4"/>
          {/* <video controls className={styles.videoOne} >
        <source src="/assets/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
          </motion.div>
        <motion.div initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsTextVideo}>
        <p className={styles.darkText}>Flourish. Just like a waterfall would. For the flow <br /> cannot stay silent, just like wisdom won't. The truth <br /> is, when they speak, the voice of power speaks.</p>
          </motion.div> 
       
        <img className={styles.miniLogo} src="/assets/mini-logo-2.png" alt="" srcset="" />
    
        <motion.div  initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsGlass}>
           <img className={styles.glass} src="/assets/glass1.png" alt="" srcset="" />
        </motion.div>
        <motion.div  initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsGlass2}>
             <img className={styles.glass2} src="/assets/glass2.png" alt="" srcset="" />
        </motion.div>
     
        <motion.div  initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsGlass}>
             <img className={styles.glass} src="/assets/glass3.png" alt="" srcset="" />
        </motion.div>
        <motion.div  initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsGlass2}>
           <img className={styles.glass2} src="/assets/glass4.png" alt="" srcset="" />
        </motion.div>
        
        </div>
    
        <div className={styles.verticalCenterWrapperThree}>
          <motion.div initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       transition={{ duration: 1 }}
       variants={variantsVideoTwo}>
        <VideoComponent src="/assets/video3.mp4" />
          {/* <video controls  className={styles.videoThird} >
        <source src="/assets/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
          </motion.div>
     
      <p className={styles.darkText}>On the road to paradise, some seekers might come across a cornucopia that is rich and abundant in gold. At certain times, more than once. And with just enough foresight, a number of those seekers will find more of it, not only for the substance itself, but for the freedom, well-being and satisfaction it bequeaths.</p>
      <img className={styles.miniLogo} src="/assets/mini-logo-2.png" alt="" srcset="" />
        </div>
      </div>
 
  
      {/* <div className={styles.charactersWrapper}>
        <img className={styles.charOne} src="/assets/charachters-1.jpg" />
        <h1 className={styles.charTitle}>A multi- <br />
dimensional <br />
story <br />
 recounted <br />
to thrill</h1>
       <p className={styles.charText}>
        <span>Mystic Grove</span> ventures <br />
beyond what most gin <br />
connoisseurs would expect.
       </p>
        <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false,amount:0.5 }}
         transition={{ duration: 0.3 }}
         variants={variantsChar}
        >
        <img className={styles.charTwo} src="/assets/charachters-2.jpg" />
        </motion.div>
        
      </div> */}
      <Characters/>
      <Footer/>
      </div>
    </>
  )
}
