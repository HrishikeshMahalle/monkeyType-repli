import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='footer'>
          <div className="linkdln">
                <a href="https://www.linkedin.com/in/hrishikesh-mahalle-40521517a/"><SiLinkedin/></a>
          </div>
          <div className="github">
            <a href="https://github.com/HrishikeshMahalle"><BsGithub/></a>
          </div>
          <div className="copyright">
            &copy; HrishiX
          </div>
        </div>
    )
}
