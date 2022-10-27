import React from "react";
import { Typography } from "@mui/material";

import styled from "styled-components";

const Wrapper = styled.section`
  .register {
    max-width: 80vw;
    margin: auto;
    padding: 5rem 10rem;
    border-radius: 1rem;
    background-color: darkblue;
  }

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
  .footer-social-icons {
    display: flex;
    gap: 2rem;
  }
  .icons {
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
  .butt {
    cursor: pointer;
    background-color: black;
    color: yellowgreen;
    border-radius: 5px;
    transition: all 0.3s linear;
    border: none;
    font-size: 16px;
    padding: 12px 70px;
  }
`;

const MidSectionTwo = () => {
  return (
    <>
      <Typography
        variant='h2'
        color='text.main'
        align='center'
        bgcolor='background.default'
        p='.5em'
        component='blockquote'>
        &#10077; Don’t bind yourself within a limit, pull out your guns and face
        the challenges🏁 &#10078;
      </Typography>
      <Wrapper>
        <section className='register'>
          <div className='grid grid-two-column'>
            <div>
              <h1>Hurry,the registrations are open</h1>
            </div>
            <div className='butt'>
              <button>Register Now!</button>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default MidSectionTwo;
