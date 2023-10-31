import { Card, Container, Typography, Grid, Button, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Speed, StarBorder, BarChart } from "@mui/icons-material";

import style from "./container.module.css";
import { Roboto_Slab, Rubik } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["500"] });
const rubik = Rubik({ subsets: ["latin"] });

const TypingCard = ({ title, description, buttonText }) => (
  <Card className={style.secondCard}>
    <Typography
      variant="body1"
      color="initial"
      className={`${rubik.className} ${style.typoText}`}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      color="initial"
      className={`${rubik.className} ${style.middleText}`}
    >
      {description}
    </Typography>
    <Button variant="text" className={`${rubik.className} ${style.enterBtn}`}>
      {buttonText}
    </Button>
  </Card>
);

const MyCardComponent = (props) => {
  const { imgSrc, title, description } = props;

  return (
    <Card className={style.card}>
      <Grid container spacing={2}>
        <Grid item xs={1} className={style.cardImg}>
          <Image src={imgSrc} width={35} height={35} alt="icon" />
        </Grid>
        <Grid item xs={11}>
          <Typography
            fontSize={20}
            className={`${rubik.className} ${style.cardHeader}`}
          >
            {title}
          </Typography>
          <Typography className={`${rubik.className} ${style.cardText}`}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

const MainPage = () => (
  <>
    <Container maxWidth="lg" className={style.container}>
      <Card>
        <div className={style.headerText}>
          <Typography
            variant="body1"
            className={`${roboto.className} ${style.subText}`}
            fontSize={48}
          >
            Elevate Your Speed and Accuracy to New Heights
          </Typography>
        </div>
        <div className={style.contentText}>
          <Typography
            variant="body1"
            className={`${roboto.className} ${style.subText}`}
          >
            Our website is your ultimate destination to master the art of typing
            faster than ever before. Whether you are a student, professional, or
            simply looking to improve your typing skills, we are here to help
            you unleash your full potential.
          </Typography>
        </div>
      </Card>

      <Grid container spacing={5} style={{ marginTop: 1 }}>
        <Grid item xs={6}>
          <TypingCard
            title="Race with your friends"
            description="Increase your typing speed while racing against others!"
            buttonText="Enter a Typing Race"
          />
        </Grid>
        <Grid item xs={6}>
          <TypingCard
            title="Typing Test"
            description="Increase your typing speed while Practicing!"
            buttonText="Practice"
          />
        </Grid>
      </Grid>
    </Container>
    <div className={style.secondContainer}>
      <Container maxWidth="lg" className={style.container}>
        <Grid container spacing={5} style={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <Image
              src="/assets/img/typingman.png"
              width={500}
              height={350}
              alt="Logo"
            ></Image>
          </Grid>
          <Grid item xs={6}>
            <Typography
              className={`${roboto.className}`}
              fontSize={48}
              color={"black"}
            >
              Check out our features
            </Typography>

            <MyCardComponent
              imgSrc="/assets/img/typeracingicon.png"
              title="Type Racing"
              description="Try and test your speed typing skills"
            />

            <MyCardComponent
              imgSrc="/assets/img/leaderboardicon.png"
              title="Type Racing"
              description="Try and test your speed typing skills"
            />

            <MyCardComponent
              imgSrc="/assets/img/statisticicon.png"
              title="Type Racing"
              description="Try and test your speed typing skills"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  </>
);

export default MainPage;
