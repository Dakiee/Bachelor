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
          Created with love by Davaa
        </Typography>
        <Typography className={`${rubik.className} ${style.mainText}`}>
          Launched on 10th of October
        </Typography>

        <Grid container my={3}>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              total started tests
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              1<br />
              billion
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              total time typing
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              236
              <br />
              years
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.mainText}`}
            >
              total completed tests
            </Typography>
            <Typography
              textAlign={"center"}
              className={`${rubik.className} ${style.statText}`}
            >
              300
              <br />
              million
            </Typography>
          </Grid>
        </Grid>
        <div className={style.footerContent}>
          <Typography
            textAlign={"left"}
            className={`${rubik.className} ${style.footerText}`}
          >
            about
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
