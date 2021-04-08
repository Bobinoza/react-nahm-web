import React, {useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UsersPagination from '../components/UsersPagination';
import Sidebar from '../components/Sidebar';
import './pagesCss/usersListPage.css';

const UsersList = () => {
  //Close and open navBar mobile
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className="containerUsersListMain">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <UsersPagination />
        <Footer />
      </div>
    </>
  );
};

export default UsersList;