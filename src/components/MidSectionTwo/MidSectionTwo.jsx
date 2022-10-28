import React from "react";
import { Typography, Box } from "@mui/material";
import { images } from "../../constants";

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
    <Wrapper>
      <Typography
        variant='h3'
        color='text.default'
        align='center'
        // bgcolor='background.default'
        p='.5em'
        component='blockquote'>
        &#10077; Don’t bind yourself within a limit, pull out your guns and face
        the challenges🏁 &#10078;
      </Typography>

      <Typography variant='h4' color='text.default' align='center'>
        Hurry,the registrations are open
      </Typography>

      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLSc6y8HAxuqdRmHW9LXKa7XpEWHsWZ7-lIYfRFVtXwlRhU_sug/viewform'
        className='register-btn'>
        <Box
          sx={{
            background: `url(${images.background})`,
            width: "100%",
            maxWidth: "600px",
            borderRadius: "40px",
            p: 5,
          }}>
          <Typography
            variant='h2'
            color='text.default'
            align='center'
            sx={{ fontWeight: 500 }}>
            REGISTER NOW
          </Typography>
        </Box>
      </a>
    </Wrapper>
  );
};

export default MidSectionTwo;
