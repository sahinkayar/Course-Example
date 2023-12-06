import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import Course from './components/Course'
import Header from './components/Header'
import second from './images/4663024_b398_2.jpg'
import First from './images/2336040_4db7_6.jpg'
import Third from './images/o9r97ts6fecb6elzm4vf.webp'
import Four from './images/image-1024x538.jpeg'

function App() {


  return (
    <>
   <Header/>
  <div className='app'> 
   <div className='container'>
    <section className='section'> 
        <div className='columns'>
           <div className='column'>
                <Course image={First} title={"C ve C# Eğitimi "} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum nisi commodi natus, dolore doloremque enim et repudiandae recusandae voluptatum laboriosam aperiam distinctio beatae perferendis sed aut eveniet blanditiis ipsa."/>
            </div>
            <div className='column'>
                 <Course  image={Third} title={"Bootstrap Eğitimi "} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum nisi commodi natus, dolore doloremque enim et repudiandae recusandae voluptatum laboriosam aperiam distinctio beatae perferendis sed aut eveniet blanditiis ipsa."/>
            </div>
             <div className='column'>
                 <Course image={Four} title={"Javascript Eğitimi "} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum nisi commodi natus, dolore doloremque enim et repudiandae recusandae voluptatum laboriosam aperiam distinctio beatae perferendis sed aut eveniet blanditiis ipsa."/>
             </div>
              <div className='column'>
                 <Course image={second} title={"Angular Eğitimi "} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eum nisi commodi natus, dolore doloremque enim et repudiandae recusandae voluptatum laboriosam aperiam distinctio beatae perferendis sed aut eveniet blanditiis ipsa."/>
              </div>
        </div>
    </section>
   </div>
  </div>
    </>
  )
}

export default App
