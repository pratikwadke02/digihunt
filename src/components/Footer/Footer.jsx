import React from "react";
import styled from "styled-components";
import {images} from '../../constants'
import {theme} from '../../theme'
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const Wrapper=styled.section `
// .register{
//   max-width: 80vw;
//   margin: auto;
//   padding: 5rem 10rem;
//   border-radius: 1rem;
//   background-color: darkblue;}

//   .grid div:last-child{
//     justify-self: end;
//     align-self: center;
//   }
//   .footer-social-icons{
//     display: flex;
//     gap: 2rem;
//   }
//   .icons{
//     font-size: 2.4rem;
//     position: relative;
//     cursor: pointer;
//     height: 40px;
//       width: 40px;
//      background-color: #f5f6fa;
//      border-radius: 30px;
//     text-align: center;
//     margin: 10px;
//      box-shadow: 1px 4px 2px 2px;
//      line-height: 120px;
//   }
//   .butt{
//     cursor: pointer;
//     background-color: black;
//     color: yellowgreen;
//     border-radius: 5px;
//     transition: all 0.3s linear;
//     border: none;
//     font-size: 16px;
//     padding: 12px 70px;
//     background-image: url(background.jpg);
//   }
//   .container  grid grid-three-column{
//     display: flex;
//     flex-wrap: wrap;
//     background-color: #90ad70;
    
//   }
//   .footer-social--icons{
//     display: flex;
//   }
//   .conts{
//     color: black;
//   }

// `;

const footer = ()=>{
  const moreData = [
    {
      title: "Rishi Doshi: +91 93237 06633",
    },
    {
      title: "Nivan Vora: +91 91365 49032",
    },
    {
      title: "Shrey Parekh: +91 98334 47698",
    },
  ];

  const SocialMedia = [
    {
      icon: <FacebookIcon sx={{ color: theme.palette.text.dark }} />,
      title: "dj-sanghvi-acm",
    },
    {
      icon: <InstagramIcon sx={{ color: theme.palette.text.dark }} />,
      title: "djsanghvi_acm",
    },
    {
      icon: <LinkedInIcon sx={{ color: theme.palette.text.dark }} />,
      title: "djscoe acm",
    },
    {
      icon: <LanguageIcon sx={{ color: theme.palette.text.dark }} />,
      title: "djacm.co.in",
    },
  ];

  return( 
  // <Wrapper>
  
  //   <footer style={{backgroundColor:'#000'}}>
  //     <div className="container grid grid-three-column">
  //     <div className="foot-img">
  //     <img src={images.acm_logo} alt="acm" style={{maxHeight:100,maxWidth:100, width:'100%', height:'auto'}}></img>
  //     </div>

  //   <div className="footer-social">
  //       <h3>Follow Us</h3>
  //       <div className="footer-social--icons">
  //           <div className="icons">
  //               <FaInstagram/>
  //           </div>
  //           <div className="icons">
  //               <FaYoutube/>
  //           </div>
  //           <div className="icons">
  //               <FaLinkedin/>
  //           </div>
  //       </div>
  //       <div className="conts">
  //           <h3>Contact Us</h3>
  //           <p>+91 91365 49032</p>
  //           <p>+91 98334 47698</p>
  //       </div>
  //   </div>


  //     </div>

  //   </footer>

  // </Wrapper>
  <>
  <Box
        sx={{
          borderTop: "1px solid" + theme.palette.text.light,
          backgroundColor: theme.palette.background.main,
          bottom: 0,
          minHeight: "300px",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            maxWidth: { xs: "100%", md: "1000px" },
            m: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src={images.acm_logo}
              alt=""
              style={{
                height: "auto",
                width: "100%",
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.default,
                mt: 1,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Association For Computing Machinery
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.default,
              }}
            >
              Contact Details
              
            </Typography>
            <Box sx={{mt:1}}>
            {moreData.map((item, index) => {
              return (
                // <Link
                //   key={index}
                //   to={item.path}
                //   style={{ textDecoration: "none" }}
                // >
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.default }}
                >
                  {item.title}
                </Typography>
                // </Link>
              );
            })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.default,
              }}
            >
              Social Media
            </Typography>
            <Box sx={{mt:1}}>
            {SocialMedia.map((item, index) => {
              return (
                <Box
                  key={index}
                 sx={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.text.default, ml: 1 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            maxWidth: { xs: "100%", md: "600px" },
            m: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width:'100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.default,
                }}
              >
                Social Media
              </Typography>
              {SocialMedia.map((item, index) => {
                return (
                  <Box 
                    key={index}
                  sx={{ display: "flex", alignItems: "center" }}>
                    {item.icon}
                    <Typography
                      variant="h6"
                      sx={{ color: theme.palette.text.default, ml: 1 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                width:'100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.default,
                }}
              >
                More
              </Typography>
              {moreData.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{ color: theme.palette.text.default }}
                  >
                    {item.title}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt:2,
            }}
          >
            <Box
            sx={{
              m:'auto',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={images.acm_logo}
              alt=""
              style={{
                height: "auto",
                width: "100%",
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.default,
                mt: 1,
                textAlign: "center",
              }}
            >
              Association For Computing Machinery
            </Typography>
          </Box>
          </Box>
        </Box>
      </Box>
  </>
  );
};


export default footer;
