import { useState,useEffect } from 'react'
import Navbar from './Header.jsx'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);
  return (
    <>
      <div>
<Navbar/>
<div className="slideshow-container">
<div class="slideshow-wrapper">
    <div className="slide">
        <img src="https://wallpapercave.com/wp/wp13662844.jpg" alt="Movie 2"/>
    </div>
    <div className="slide">
        <img src="https://wallpapercave.com/wp/wp13662855.jpg" alt="Movie 3"/>
    </div>
    <div className="slide">
        <img src="https://wallpapercave.com/wp/wp12356432.jpg" alt="Movie 4"/>
    </div>
    <div className="slide">
        <img src="https://wallpapercave.com/wp/wp12356401.jpg" alt="Movie 4"/>
    </div>
    </div>
</div>
<center><h1>Our work</h1></center>

  <div className="work-cont">
    <div className="work-img" data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/70/78/45/7078455d004c8dd8543fcb7d944de57c.gif" alt="" />
      <p>frontend  development

      </p>
    </div>
    <div className="work-img" data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/75/c2/f8/75c2f842863ae2df6b3ac2d0a4d63026.gif" alt="" />
      <p>backend  development</p>
    </div>
    <div className="work-img"data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/f9/ba/23/f9ba232d6b18c80b3a95c1ec8dc1c796.gif" alt="" />
      <p>Full-stack development</p>
    </div>
    <div className="work-img"data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/cd/c3/f8/cdc3f863a7d97ffc033ac5275b927f93.gif" alt="" />
      <p>MERN development</p>
    </div>
    <div className="work-img"data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/85/04/77/850477fed08bfe98598082bcd309ce70.gif" alt="" />
      <p>MEAN development</p>
    </div>
    <div className="work-img"data-aos="zoom-in">
      <img src="https://i.pinimg.com/originals/06/60/ef/0660efe82fa3da42ed56eef013171835.gif" alt="" />
      <p>PHP development</p>
    </div>
  </div>

<center><h1 id='project'>Project Outcomes</h1></center>

  <div className="project" >
    <div className="text-container" data-aos="zoom-in"><h1>40+</h1>
    <p>projects</p>
    </div>
    <div className="text-container" data-aos="zoom-in"><h1>20</h1>
    <p>static projects</p>
    </div>
    <div className="text-container" data-aos="zoom-in"><h1>10</h1>
    <p>dynamic project</p>
    
  </div>
  <div className="text-container" data-aos="zoom-in"><h1>3</h1>
    <p>E-Commerce project</p>
    
  </div>
  <div className="text-container" data-aos="zoom-in"><h1>5</h1>
    <p>streaming project</p>
    
  </div>
  <div className="text-container" data-aos="zoom-in"><h1>2</h1>
    <p>Application</p>
    
  </div>
</div>

<div className="about-container" id='about'>
  <div className="about" data-aos="fade-right">
 <center>  <h1 >About</h1></center> 
    <p>Welcome , your ultimate destination for building stunning, responsive, and user-friendly websites. In today’s digital world, having an impactful online presence is not just an option—it’s a necessity. That’s where we come in, making website creation seamless, intuitive, and enjoyable for everyone, regardless of their technical expertise.
    These platforms emphasize responsive design, ensuring websites look and perform well on desktops, tablets, and smartphones. Features like custom domains, integrated hosting, and SEO tools streamline the process of launching and maintaining a website. Many also include additional capabilities such as e-commerce integrations, blogging support, and analytics dashboards to track performance.

</p>
  </div>
  <div className="about-img"><img src="https://wallpapercave.com/wp/wp12356479.jpg" alt="" /></div>
</div>
<div className="contact" >
<center><h1 id='contact'>Contact</h1></center>

  <label htmlFor="">Name</label>
  <input type="text" placeholder=''/>
  <label htmlFor="">Email</label>

  <input type="email" placeholder=''/>  
  <label htmlFor="">Message</label>

  <textarea name="" id="" placeholder=''></textarea>
  <button>Send</button>

</div>
<div className="footer">
  <p>&copy; CopyRights for our site</p>
</div>
      </div>
       
    </>
  )
}

export default App
