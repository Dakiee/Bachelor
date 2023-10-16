import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import style from "./container.module.css";
import Typography from "@mui/material/Typography";
import { Roboto_Slab } from "next/font/google";
import { Rubik } from "next/font/google";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["500"] });
const rubik = Rubik({ subsets: ["latin"] });

const MainPage = () => {
  return (
    <div>
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
              Our website is your ultimate destination to master the art of
              typing faster than ever before. Whether you are a student,
              professional, or simply looking to improve your typing skills, we
              are here to help you unleash your full potential.
            </Typography>
          </div>
        </Card>

        <Grid container spacing={5} style={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <Card className={style.secondCard}>
              <Typography
                variant="body1"
                color="initial"
                className={`${rubik.className} ${style.typoText}`}
              >
                Race with your friends
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className={`${rubik.className} ${style.middleText}`}
              >
                Increase your typing speed while racing against others!
              </Typography>
              <Button
                variant="text"
                className={`${rubik.className} ${style.enterBtn}`}
              >
                Enter a Typing Race
              </Button>
            </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={style.secondCard}>
              <Typography
                variant="body1"
                color="initial"
                className={`${rubik.className} ${style.typoText}`}
              >
                Typing Test
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className={`${rubik.className} ${style.middleText}`}
              >
                Increase your typing speed while Practicing!
              </Typography>
              <Button
                variant="text"
                className={`${rubik.className} ${style.enterBtn}`}
              >
                Practice
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
