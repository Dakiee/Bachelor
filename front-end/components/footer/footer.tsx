import React from "react";
import Container from "@mui/material/Container";
import style from "./container.module.css";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={style.footerDiv}>
      <Container maxWidth="lg" className={style.footerContent}>
        <div className={style.footerText}>
          <Typography variant="body1" fontSize={22}>
            Developed by Dakie
          </Typography>
        </div>
        <div className={style.footerImg}>
          <Image
            src="/assets/img/github.png"
            width={35}
            height={35}
            alt="icon"
          />
          <Image
            src="/assets/img/facebook.png"
            width={35}
            height={35}
            alt="icon"
          />
          <Image
            src="/assets/img/instagram.png"
            width={35}
            height={35}
            alt="icon"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
