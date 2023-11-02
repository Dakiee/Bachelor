import React from "react";
import {
  Card,
  Container,
  Typography,
  Grid,
  Button,
  Box,
  TextField,
} from "@mui/material";
import style from "./playpage.module.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const PlayPage = () => {
  const PlayContent = (props: any) => {
    const { name, progress, wpm, completion, style } = props;

    return (
      <div className={`${style.playStatus} ${rubik.className}`}>
        <Typography
          variant="body1"
          fontSize={18}
          className={style.playStatusName}
        >
          {name}
        </Typography>
        <div className={style.progress_bar}>
          <div
            className={style.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={style.playContentEnd}>
          <Typography
            variant="body1"
            fontSize={18}
            className={style.playContentBodyText}
          >
            {wpm}
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            className={style.playContentBodyText}
          >
            {completion}
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <div className={`${style.container} ${rubik.className}`}>
      <Container maxWidth="xl">
        <Card className={style.cardBody}>
          <Typography
            variant="body1"
            fontSize={24}
            className={`${rubik.className} ${style.playHeaderText}`}
          >
            The race is on! Type the text below:
          </Typography>
          <div className={style.playContent}>
            <div className={style.playContentHeader}>
              <Typography
                variant="body1"
                fontSize={18}
                className={style.playContentHeaderText}
              >
                Speed
              </Typography>
              <Typography
                variant="body1"
                fontSize={18}
                className={style.playContentHeaderText}
              >
                Accuracy
              </Typography>
            </div>

            <PlayContent
              name="Dakie"
              progress={80}
              wpm="80WPM"
              completion="100%"
              style={style}
            />

            <PlayContent
              name="Baldan"
              progress={60}
              wpm="80WPM"
              completion="100%"
              style={style}
            />

            <div className={style.typingTextContainer}>
              <Typography
                variant="body1"
                className={style.typingText}
                fontSize={20}
              >
                The best quotes contain messages that provide wisdom we can
                carry with us every day and inspire us to be our best selves.
                Let these words fill you with hope and give you the motivation
                to keep going, even when things are hard.
              </Typography>
            </div>

            <div>
              <TextField
                id=""
                className={`${style.typingField} ${rubik.className}`}
                // onChange={}
              />
            </div>

            <Button
              variant="text"
              className={`${rubik.className} ${style.leaveBtn}`}
            >
              leave race
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default PlayPage;
