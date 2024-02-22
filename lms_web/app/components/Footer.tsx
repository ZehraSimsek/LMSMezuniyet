import React from "react"
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="bg-sky-50 mx-auto w-full px-2 sm:px-6">
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
        © {new Date().getFullYear()}<a href="/" className="hover:underline"></a>
        </div>
        
        <div className="flex flex-col items-center justify-center space-x-4 mb-10">
        <p className="text-neutral-500 dark:text-neutral-100 text-balance mr-0 mt-10 font-sans font-semibold ">Site hakkında önerilerinizi <br/> bize LinkedIn üzerinden iletebilirsiniz.</p>
          <div className="flex flex-row text-right items-end justify-end space-x-4 mt-5">
            <a href="https://www.linkedin.com/in/zehra-şimşek-843885222" target="_self" rel="noopener noreferrer" title="Zehra Şimşek">
              <div className='p-4 bg-[#3a5bff] rounded-xl'>
                <FaLinkedinIn size={18} style={{color:'#FFFFFF'}} title="Zehra Şimşek" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/edakaraman1" target="_self" rel="noopener noreferrer" title="Eda Karaman">
              <div className='p-4 bg-[#3a5bff] rounded-xl'>
                <FaLinkedinIn size={18} style={{color:'#FFFFFF'}} title="Eda Karaman" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
