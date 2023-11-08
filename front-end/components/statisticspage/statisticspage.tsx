import { Box, Container, Card, Typography, Grid } from "@mui/material";
import Image from "next/image";
import style from "./statistics.module.css";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const StatisticsPage = () => {
  const StatCard = (props: any) => {
    const { value, fieldName, backgroundColor } = props;

    return (
      <Card
        style={{
          backgroundColor: backgroundColor,
          height: "100px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography
          variant="body1"
          color="black"
          fontSize={20}
          fontWeight={"bold"}
          className={rubik.className}
          textAlign={"center"}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          color="black"
          fontSize={20}
          className={rubik.className}
          textAlign={"center"}
        >
          {fieldName}
        </Typography>
      </Card>
    );
  };

  return (
    <>
      <Container>
        <Card className={style.firstCard}>
          {/* <Image
            src="/assets/img/google.png"
            width={20}
            height={20}
            alt="Picture of the google btn"
            className={style.googleImg}
          ></Image> */}
          <Typography variant="body1" color="black" className={`${rubik.className} ${style.firstCardHeaderText}`}>
            Dakie
          </Typography>
          <Typography variant="body1" color="black" className={`${rubik.className} ${style.firstCardMailText}`}>
            ldavaanyam@gmail.com
          </Typography>
        </Card>
        <Card className={style.secondCard}>
          <Typography
            variant="body1"
            color="initial"
            className={`${rubik.className} ${style.secondCardHeaderText}`}
          >
            Статистик
          </Typography>
          <Grid container spacing={2} mx={2}>
            <Grid item xs={4}>
              <StatCard
                value={120}
                fieldName="Туршилтын тоо"
                backgroundColor="#FFD0D0"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={120}
                fieldName="Дундаж WPM"
                backgroundColor="#E6FFD2"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={120}
                fieldName="Дундаж нарийвчлал"
                backgroundColor="#C3FFFB"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={120}
                fieldName="Хамгийн бага WPM"
                backgroundColor="#C8BAFF"
              />
            </Grid>
            <Grid item xs={4}>
              <StatCard
                value={120}
                fieldName="Хамгийн өндөр WPM"
                backgroundColor="#FFFCBB"
              />
            </Grid>
            <Grid item xs={4} className={style.secondCardFooter}>
              <StatCard
                value={1}
                fieldName="Одоогийн зэрэглэл"
                backgroundColor="#D3D3D3"
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default StatisticsPage;
