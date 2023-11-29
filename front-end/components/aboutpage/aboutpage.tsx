import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import style from "./aboutpage.module.css";

import { makeStyles } from "@mui/material/styles";
import { Roboto_Slab, Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const roboto = Roboto_Slab({ subsets: ["latin"] });

const AboutPageContent = () => {
  return (
    <Container>
      <Card
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          className={`${rubik.className} ${style.mainText}`}
          marginTop={"2rem"}
        >
          Created with love by Dakie
        </Typography>
        <Typography className={`${rubik.className} ${style.mainText}`}>
          10-р сарын 10-нд эхэлсэн
        </Typography>

        <Grid container my={3}>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              нийт тестүүд
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              1<br />
              тэрбум
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              бичсэн нийт хугацаа
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              236
              <br />
              жил
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              нийт дууссан тестүүд
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              300
              <br />
              сая
            </Typography>
          </Grid>
        </Grid>
        <div className={style.footerContent}>
          <Typography
            textAlign={"left"}
            className={`${rubik.className} ${style.footerText}`}
          >
            тухай
          </Typography>
          <Typography className={`${rubik.className} ${style.mainText}`}>
            duckrace is a minimalistic and customizable typing test. It features
            many test modes, an account system to save your typing speed
            history, and user-configurable features such as themes, sounds, a
            smooth caret, and more
          </Typography>
        </div>
      </Card>
    </Container>
  );
};

export default AboutPageContent;
