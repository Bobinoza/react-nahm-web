import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import JsonData from '../../MOCK_DATA.json';

import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import './pagination.css';
import { animateScroll as scroll } from 'react-scroll'; //3:27:10
import {
  PaginationContainer,
  PaginationContainerBox,
  PaginationContainerPhoto,
  PaginationImg,
  PaginationContainerContents,
  PaginationContainerTop,
  PaginationContainerNameEndInfos,
  PaginationName,
  PaginationRating,
  PaginationPhone,
  PaginationDistrict,
  PaginationContainerPrices,
  PaginationPriceOne,
  PaginationPriceTwo,
  PaginationPriceThree,
  PaginationPriceFour,
  PaginationSeparator,
  PaginationContainerBottom,
  PaginationBio,
} from './PaginationElements';

const UsersPagination = () => {
  const [users, setUsers] = useState(JsonData.slice(0, 200));
  const [pageNumber, setPageNumber] = useState(0); // um estado que representa em qual página estamos e vamos alteralo quando clicarkmos na paginação.

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <>
          <PaginationContainer>
            <PaginationContainerBox>
              <PaginationContainerPhoto>
                <PaginationImg src={user.photo} />
              </PaginationContainerPhoto>

              <PaginationContainerContents>
                <PaginationContainerTop>
                  <PaginationContainerNameEndInfos>
                    <PaginationName>{user.firstName}</PaginationName>
                    <PaginationRating>{user.rating}</PaginationRating>
                    <PaginationPhone>
                      <FaWhatsappSquare style={{color: "green"}}  size="26"/> <span style={{fontWeight: '600'}}>{user.phone}</span>
                    </PaginationPhone>
                    <PaginationDistrict>
                      <MdLocationOn style={{color: "#8587FE"}} size="26"/> <span style={{fontWeight: '600'}}>{user.district}</span>
                    </PaginationDistrict>
                  </PaginationContainerNameEndInfos>
                  <PaginationContainerPrices>
                    <PaginationPriceOne>1 dormitório <span style={{fontWeight: '600'}}> R$ {user.priceOne}</span></PaginationPriceOne>
                    <PaginationPriceTwo>2 dormitórios <span style={{fontWeight: '600'}}> R$ {user.priceTwo}</span></PaginationPriceTwo>
                    <PaginationPriceThree>3 dormitórios <span style={{fontWeight: '600'}}> R$ {user.priceThree}</span></PaginationPriceThree>
                    <PaginationPriceFour>4 dormitórios <span style={{fontWeight: '600'}}> R$ {user.priceFour}</span></PaginationPriceFour>
                  </PaginationContainerPrices>
                </PaginationContainerTop>

                <PaginationSeparator />

                <PaginationContainerBottom>
                  <PaginationBio> <span style={{fontWeight: '600'}}> Sobre  {user.firstName}</span>  <br />{user.bio}</PaginationBio>
                </PaginationContainerBottom>
              </PaginationContainerContents>
            </PaginationContainerBox>
          </PaginationContainer>
        </>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //Create function to go to TOP 3:26:00
  const toggleHome = () => {
    scroll.scrollToTop();
  };


  return (
    <div className="App">
      {displayUsers}
      <div onClick={toggleHome}>
        <ReactPaginate 
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default UsersPagination;



