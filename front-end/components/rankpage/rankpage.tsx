import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import style from "./rank.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const RankContent = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Card className={style.cardBody}>
          <Typography variant="body1">LeaderBoard</Typography>
          <Typography variant="body1">
            Compete against other users and aim for the top spot on the
            leaderboard
          </Typography>
          <div className={style.buttons}>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
            >
              week
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
            >
              month
            </Button>
            <Button
              variant="text"
              className={`${rubik.className} ${style.filterBtn}`}
            >
              year
            </Button>
          </div>
          <div>
            
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RankContent;
