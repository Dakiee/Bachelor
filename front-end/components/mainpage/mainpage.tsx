import { Card, Container, Typography, Grid, Button, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Speed, StarBorder, BarChart } from "@mui/icons-material";

import style from "./container.module.css";
import { Roboto_Slab, Rubik } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["500"] });
const rubik = Rubik({ subsets: ["latin"] });

const MainPage = () => {
  const TypingCard = (props: any) => {
    const { title, description, buttonText } = props;

    return (
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
        <Button
          variant="text"
          className={`${rubik.className} ${style.enterBtn}`}
        >
          {buttonText}
        </Button>
      </Card>
    );
  };

  const MyCardComponent = (props: any) => {
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

  return (
    <>
      <Container maxWidth="lg" className={style.container}>
        <Card>
          <div className={style.headerText}>
            <Typography
              variant="body1"
              className={`${roboto.className} ${style.subText}`}
              fontSize={48}
            >
              Өөрийн хурд, нарийвчлалыг шинэ өндөрлөгт дээшлүүлээрэй
            </Typography>
          </div>
          <div className={style.contentText}>
            <Typography
              variant="body1"
              className={`${roboto.className} ${style.subText}`}
            >
              Манай вэб сайт бол таны шивэх урлагийг урьд өмнөхөөсөө илүү хурдан
              эзэмших цэг юм. Та оюутан ч бай, мэргэжлийн хүн ч бай, эсвэл
              зүгээр л бичих чадвараа сайжруулахыг зорьж байгаа эсэхээс үл
              хамааран бид танд өөрийн чадавхийг бүрэн дүүрэн нээхэд тань
              туслахад бэлэн байна.
            </Typography>
          </div>
        </Card>

        <Grid container spacing={5} style={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <TypingCard
              title="Найзуудтайгаа уралд"
              description="Бусадтай уралдаж байхдаа бичих хурдаа нэмэгдүүлээрэй!"
              buttonText="Уралдаанд оролцох"
            />
          </Grid>
          <Grid item xs={6}>
            <TypingCard
              title="Бичих тест"
              description="Бичих чадвараа бие даан сайжруул!"
              buttonText="Дасгал хийх"
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
                width={550}
                height={370}
                alt="Logo"
              ></Image>
            </Grid>

            <Grid item xs={6}>
              <Typography
                className={`${roboto.className} ${style.featureText}`}
                fontSize={48}
                color={"black"}
              >
                Check out our features
              </Typography>

              <MyCardComponent
                imgSrc="/assets/img/typeracingicon.png"
                title="Type Racing"
                description="Хурдан бичих чадвараа туршиж үзээрэй"
              />

              <MyCardComponent
                imgSrc="/assets/img/leaderboardicon.png"
                title="Leaderboard"
                description="Оргилд гарч, шилдэг бичээч болоорой"
              />

              <MyCardComponent
                imgSrc="/assets/img/statisticicon.png"
                title="User statistics"
                description="Бичих ур чадварынхаа статистик мэдээллийг хуваалцаарай"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
