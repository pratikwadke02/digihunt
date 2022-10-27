import React from "react";
import styled from "styled-components";
import {FaInstagram,FaLinkedin,FaYoutube} from "react-icons/fa";
import {images} from '../../constants'

const Wrapper=styled.section `
.register{
  max-width: 80vw;
  margin: auto;
  padding: 5rem 10rem;
  border-radius: 1rem;
  background-color: darkblue;}

  .grid div:last-child{
    justify-self: end;
    align-self: center;
  }
  .footer-social-icons{
    display: flex;
    gap: 2rem;
  }
  .icons{
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
    height: 40px;
      width: 40px;
     background-color: #f5f6fa;
     border-radius: 30px;
    text-align: center;
    margin: 10px;
     box-shadow: 1px 4px 2px 2px;
     line-height: 120px;
  }
  .butt{
    cursor: pointer;
    background-color: black;
    color: yellowgreen;
    border-radius: 5px;
    transition: all 0.3s linear;
    border: none;
    font-size: 16px;
    padding: 12px 70px;
    background-image: url(background.jpg);
  }
  .container  grid grid-three-column{
    display: flex;
    flex-wrap: wrap;
    background-color: #90ad70;
    
  }
  .footer-social--icons{
    display: flex;
  }
  .conts{
    color: black;
  }

`;

const footer = ()=>{
  return( 
  <Wrapper>

    <footer style={{backgroundColor:'#000'}}>
      <div className="container grid grid-three-column">
      <div className="foot-img">
      <img src={images.acm_logo} alt="acm" style={{maxHeight:100,maxWidth:100, width:'100%', height:'auto'}}></img>
      </div>

    <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="footer-social--icons">
            <div className="icons">
                <FaInstagram/>
            </div>
            <div className="icons">
                <FaYoutube/>
            </div>
            <div className="icons">
                <FaLinkedin/>
            </div>
        </div>
        <div className="conts">
            <h3>Contact Us</h3>
            <p>+91 91365 49032</p>
            <p>+91 98334 47698</p>
        </div>
    </div>


      </div>

    </footer>

  </Wrapper>
  );
};


export default footer;
