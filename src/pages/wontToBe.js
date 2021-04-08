import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Sidebar from '../components/Sidebar';

import './pagesCss/wontToBe.css';

const WontToBe = () => {
  //Close and open navBar mobile
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="containerWontToBeMain"> 
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Form />
      <Footer />
    </div>
  )
}

export default WontToBe;