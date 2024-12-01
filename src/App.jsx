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
  </div>

<center><h1>Project Outcomes</h1></center>

  <div className="project" >
    <div className="text-container" data-aos="zoom-in"><h1>10+</h1>
    <p>total project</p>
    </div>
    <div className="text-container" data-aos="zoom-in"><h1>7</h1>
    <p>frontend project</p>
    </div>
    <div className="text-container" data-aos="zoom-in"><h1>3</h1>
    <p>backend project</p>
  </div>
</div>

<div className="about-container">
  <div className="about" data-aos="fade-right">
 <center>  <h1>About</h1></center> 
    <p>Welcome , your ultimate destination for building stunning, responsive, and user-friendly websites. In today’s digital world, having an impactful online presence is not just an option—it’s a necessity. That’s where we come in, making website creation seamless, intuitive, and enjoyable for everyone, regardless of their technical expertise.

</p>
  </div>
  <div className="about-img"><img src="https://wallpapercave.com/wp/wp12356479.jpg" alt="" /></div>
</div>
<div className="footer">
  <p>&copy; CopyRights for our site</p>
</div>
      </div>
       
    </>
  )
}

export default App
